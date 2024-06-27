// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

import { FormData } from './definitions';

export function calculateInvestmentResults(formData: FormData) {
  const annualData = [];
  let investmentValue = formData.initialInvestment;

  for (let i = 0; i < formData.duration; i++) {
    const year = i + 1;
    const interestEarnedInYear =
      investmentValue * (formData.expectedReturn / 100);
    investmentValue += interestEarnedInYear + formData.annualInvestment;
    const totalInterest =
      investmentValue -
      formData.annualInvestment * year -
      formData.initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: formData.annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested:
        formData.initialInvestment + formData.annualInvestment * year,
    });
  }

  return annualData;
}
