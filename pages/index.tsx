import React from 'react';
import fetch from 'isomorphic-unfetch';
import Plan from '../components/plan';
import { PricingApiResponse, Plan as PlanType, PlanName } from '../types';


const defaultCurrency = 'EUR';

Home.getInitialProps = async () => {
  const plansByCurrency = {
    EUR: await getPlans('EUR'),
    USD: await getPlans('USD'),
    CHF: await getPlans('CHF')
  };

  return {
    plansByCurrency,
    currency: defaultCurrency,
  };
}

type Props = {
  plansByCurrency: {[currencyCode: string]: PlanType[]},
  currency: string,
};

export default function Home(props: Props) {
  const {plansByCurrency, currency: defaultCurrency} = props;
  const [plans, setPlans] = React.useState([] as PlanType[]);
  const [error, setError] = React.useState('');

  const [billingPeriod, setBillingPeriod] = React.useState(1);

  const [currency, setCurrency] = React.useState(defaultCurrency);

  let currentPlans = (plans && plans.length > 0) ? plans : plansByCurrency[currency];

  React.useEffect(() => {
    setPlans([]);
    getPlans(currency)
      .then(setPlans)
      .catch(() => {
        setError('Note: Unable to fetch latest data. Prices and plan details may be out of date.');
      });
  }, [getPlans, currency]);

  return (
    <div>
      <h1>Plans &amp; prices</h1>
      <div className="plan-filters">
        <select
          value={billingPeriod}
          onChange={event => {
            console.log(typeof event.currentTarget.value, event.currentTarget.value);
            setBillingPeriod(Number(event.currentTarget.value))
          }}
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
      {error &&
        <div>{error}</div>
      }
      <ul className="plan-list">
        {currentPlans
          .filter(planFilter)
          .sort((a, b) => a.Amount - b.Amount)
          .map(plan => (
            <li key={plan.ID}>
              <Plan plan={plan} period={billingPeriod as 1 | 12 | 24} />
            </li>
          ))
        }
      </ul>
      <input
        type="hidden"
        name="release-tag"
        // Put a unique string here whenever building and exporting
        // for Github Pages, so you can see when Github has deployed
        // your changes to the web
        value="hydration-fix"
      />
    </div>
  );
}

function makeFreePlan(currency: string): PlanType {
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

function planFilter(plan: PlanType): boolean {
  return Object.values(PlanName).includes(plan.Name);
}

async function getPlans(currency: string): Promise<PlanType[]> {
  return fetchPlans(currency)
    .then(response => {
      if (response.ok) {
        return response.json().then((data: PricingApiResponse) =>
          [makeFreePlan(currency), ...data.Plans]
        );
      } else {
        throw new Error();
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
