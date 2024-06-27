export type FormData = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

export const emptyForm: FormData = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 5,
  duration: 10,
};

export type TableRow = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
};
