import React from 'react';
import fetch from 'isomorphic-unfetch';


Home.getInitialProps = async () => {
  return {
    planData: await getPlans()
  };
}

export default function Home(props: {planData: PlanData}) {
  const { planData } = props;

  const [planDataUsd, setPlanDataUsd]:
    [PlanData | void, React.SetStateAction<PlanData | void> ] = React.useState();

  const planDataString = JSON.stringify(planDataUsd || planData);

  return (
    <div>
      <button  onClick={async () => setPlanDataUsd(await getPlans('USD'))}>
        Change to USD
      </button><br />
      Plan data: <br />
      <textarea
        value={planDataString}
        readOnly={true}
        cols={120}
        rows={50}
      />
      <input
        type="hidden"
        name="release-tag"
        // Put a unique string here whenever building and exporting
        // for Github Pages, so you can when your updates have actually
        // been deployed to Github Pages
        value="ondemandusd"
      />
    </div>

  );
}

type PlanData = {
  Plans: [],
};

async function getPlans(currency: string = 'EUR'): Promise<PlanData | void> {
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
  return fetch(`https://api.protonmail.ch/payments/plans?Currency=${currency}`, myInit)
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
