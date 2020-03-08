import React from 'react';
import fetch from 'isomorphic-unfetch';
import Plan from '../components/plan';
import { PricingApiResponse, Plan as PlanType, PlanName } from '../types';


const defaultCurrency = 'EUR';

// TODO later: build static pages with embedded data that gets hydrated from API
// Home.getInitialProps = async () => {
//   const currency = defaultCurrency;
//   return {
//     planData: await getPlans(currency),
//     currency,
//   };
// }

export default function Home() {
  const [plans, setPlans] = React.useState(([] as PlanType[]));
  const [error, setError] = React.useState('');

  const [billingPeriod, setBillingPeriod] = React.useState(1);

  const [currency, setCurrency] = React.useState(defaultCurrency);

  React.useEffect(() => {
    getPlans(currency)
      .then(setPlans)
      .catch(() => setError('Could not fetch data. See console'));
  }, [getPlans, currency]);

  return (
    <div>
      <h1>Plans &amp; prices</h1>
      <div className="plan-filters">
        <select
          value={billingPeriod}
          onChange={event => setBillingPeriod(Number(event.currentTarget.value))}
          className="plan-filter"
        >
          <option value={1}>Monthly</option>
          <option value={12}>Annually</option>
          <option value={24}>Two years</option>
        </select>
        <select
          value={currency}
          onChange={event => {
            setCurrency(event.currentTarget.value)
          }}
          className="plan-filter"
        >
          <option title="Euros">EUR</option>
          <option title="US dollars">USD</option>
          <option title="Swiss francs">CHF</option>
        </select>
      </div>
      <ul className="plan-list">
        {plans
          .filter(planFilter)
          .sort((a, b) => a.Amount - b.Amount)
          .map(plan => (
            <li key={plan.ID}>
              <Plan plan={plan} period={billingPeriod as 1 | 12 | 24} />
            </li>
          ))
        }
      </ul>
      {error &&
        <div>Error fetching price and plan data. See console.</div>
      }
      <input
        type="hidden"
        name="release-tag"
        // Put a unique string here whenever building and exporting
        // for Github Pages, so you can when your updates have actually
        // been deployed to Github Pages
        value="fugtional"
      />
    </div>
  );
}

function makeFreePlan(currency: string = defaultCurrency): PlanType {
  return {
    ID: 'free',
    Name: PlanName.FREE,
    MaxMembers: 1,
    MaxSpace: 500000000,
    MaxAddresses: 1,
    MaxDomains: 0,
    MaxVPN: 0,
    Pricing: {
      1: 0,
      12: 0,
      24: 0,
    },
    Currency: currency,
    Amount: 0,
  }
};

function planFilter(plan: PlanType) {
  return Object.values(PlanName).includes(plan.Name);
}

async function getPlans(currency: string = defaultCurrency): Promise<PlanType[]> {
  return fetchPlans(currency)
    .then(response => {
      if (response.ok) {
        return response.json().then((data: PricingApiResponse) =>
          [makeFreePlan(currency), ...data.Plans]
        );
      } else {
        return [];
      }
    });
};

async function fetchPlans(currency: string) {
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
  return fetch(`https://api.protonmail.ch/payments/plans?Currency=${currency}`, myInit);
}
