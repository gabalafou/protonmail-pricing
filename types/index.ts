export enum PlanName {
  FREE = 'free',
  PLUS = 'plus',
  PROFESSIONAL = 'professional',
  VISIONARY = 'visionary',
}

export type Plan = {
  ID: string,
  Name: PlanName,
  MaxDomains: number,
  MaxAddresses: number,
  MaxSpace: number,
  MaxMembers: number,
  MaxVPN: number,
  Pricing: {
    1: number, // e.g. 1200 = 12 EUR
    12: number,
    24: number
  },
  Currency: string,
  // Used to sort plans by cost
  Amount: number,

  /*
  Unused, but returned by the API:
  "Title": "Business",
  "Type": 1,
  "Services": 1,
  "Features": 0,
  "Quantity": 1,
  "Cycle": 1,
  "Amount": 1000
  */
};

export type PricingApiResponse = {
  Plans: Plan[]
};
