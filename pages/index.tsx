import React from 'react';
import fetch from 'isomorphic-unfetch';


Home.getInitialProps = async () => {
  return {
    planData: await getPlans()
  };
}

export default function Home(props: {planData: PlanData}) {
  const { planData } = props;
  const planDataString = JSON.stringify(planData);
  return (
    <div>
      Plan data: <br />
      <textarea
        defaultValue={planDataString}
        cols={120}
        rows={50}
      />
    </div>
  );
}

type PlanData = {
  Plans: [],
};

async function getPlans(): Promise<PlanData | void> {
  const myHeaders = {
    'Content-Type': 'application/json;charset=utf-8',
    'x-pm-appversion': 'Other',
    'x-pm-apiversion': '3',
    'Accept': 'application/vnd.protonmail.v1+json',
  };

  const myInit: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: "default"
  };
  return fetch('https://api.protonmail.ch/payments/plans?Currency=EUR', myInit)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error("Fetching plans failed.");
        return;
      }
    })
    .catch(err => {
      console.error(err);
      return;
    });
};
