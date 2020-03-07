import { Plan as PlanType, PlanName } from '../types';


type Props = {
  plan: PlanType,
  period: 1 | 12 | 24,
};

export default function Plan(props: Props) {
  const { plan, period } = props;
  return (
    <div>
      {plan.Name === PlanName.PLUS &&
        <div>Most popular</div>
      }
      <div>{title(plan)}</div>
      <div>
        <span>{currencySymbol(plan)}</span>
        <span>{price(plan, period)}</span>
        <span>/{billingPeriod(plan, period)}</span>
      </div>
      {period === 1 &&
        <div>Billed as {price(plan, period) * 12} per year</div>
      }
      <div>{description(plan)}</div>
      <ul>
        <li>{numberOfUsers(plan)}</li>
        <li>{storage(plan)}</li>
        <li>{numberOfEmailAddresses(plan)}</li>
        <li>{numberOfDomains(plan)}</li>
        {otherFeatures(plan) &&
          <li>{otherFeatures(plan)}</li>
        }
        {plan.Name === PlanName.VISIONARY &&
          <li>Priority support</li>
        }
        <li>{protonVpn(plan)}</li>
      </ul>
    </div>
  );
}

function title(plan: PlanType) {
  return plan.Name;
}

function description(plan: PlanType) {
  switch(plan.Name) {
    case PlanName.PLUS:
      return 'Full-featured mailbox with advanced protection';
    case PlanName.PROFESSIONAL:
      return 'ProtonMail for professionals and businesses';
    case PlanName.VISIONARY:
      return 'ProtonMail for families and small businesses';
  }
}

const currencySymbols: {[code: string]: string} = {
  EUR: '€',
  USD: '$',
};

function currencySymbol(plan: PlanType) {
  return currencySymbols[plan.Currency] || plan.Currency;
}

function price(plan: PlanType, period: Props['period']) {
  return plan.Pricing[period] / 100;
}

const billingPeriodCodes = {
  1: 'mo',
  12: 'yr',
  24: '2yr',
};

function billingPeriod(plan: PlanType, period: Props['period']) {
  let code = billingPeriodCodes[period];
  if (plan.Name === PlanName.PROFESSIONAL) {
    // Professional plan pricing and quotas are PER USER
    code = code + '/user'
  }
  return code;
}

function numberOfUsers(plan: PlanType) {
  if (plan.Name === PlanName.PROFESSIONAL) {
    return '1 - 5000 users';
  } else {
    return plan.MaxMembers > 1 ?
      `${plan.MaxMembers} users`
      : '1 user';
  }
}

// TODO unit test this
function storage(plan: PlanType) {
  const { MaxSpace: space } = plan;
  const isMb = (space / 1e9) < 1;
  const isGb = (space / 1e9) >= 1;

  // default is in bytes (it's undesirable to display this,
  // but this provides a safe default)
  let result = `${space} bytes storage`;

  if (isMb) {
    let mb = Math.trunc(space / 1e6);
    // round to nearest 100 (unless 0, then keep original)
    mb = (mb - (mb % 100)) || mb;
    result = `${mb} MB storage`;
  } else if (isGb) {
    let gb = Math.trunc(space / 1e9);
    // round to nearest 5 (unless 0, then keep original)
    gb = (gb - (gb % 5)) || gb;
    result = `${gb} GB storage`;
  }

  if (plan.Name === PlanName.PROFESSIONAL) {
    // Professional plan is PER USER
    result = result + ' per user';
  }

  return result;
}

function numberOfEmailAddresses(plan: PlanType) {
  let result = plan.MaxAddresses > 1 ?
    `${plan.MaxAddresses} addresses`
    : '1 address';


  if (plan.Name === PlanName.PROFESSIONAL) {
    // Professional plan is PER USER
    result = result + ' per user';
  }

  return result;
}

function numberOfDomains(plan: PlanType) {
  return plan.MaxDomains > 1 ? `${plan.MaxDomains} domains`
       : plan.MaxDomains === 1 ? `1 domain`
       : 'No domain support';
}

function otherFeatures(plan: PlanType) {
  switch (plan.Name) {
    case PlanName.PLUS:
      return 'Supports folders, labels, filters, auto-reply, IMAP/SMTP and more';
    case PlanName.PROFESSIONAL:
      return 'Catch-all email, multi-user management, priority support and more';
    case PlanName.VISIONARY:
      return 'Includes all features';
  }
}

function protonVpn(plan: PlanType) {
  if (plan.MaxVPN > 0) {
    return 'Includes ProtonVPN';
  } else {
    return 'ProtonVPN (optional add-on)';
  }
}
