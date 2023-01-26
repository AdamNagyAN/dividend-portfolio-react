interface IncomeStatementDto {
	endDate: string;
	totalRevenue: number;
	costOfRevenue: number;
	grossProfit: number;
	researchDevelopment: number;
	sellingGeneralAdministrative: number;
	nonRecurring: number;
	otherOperatingExpenses: number;
	totalOperatingExpenses: number;
	operatingIncome: number;
	totalOtherIncomeExpenseNet: number;
	ebit: number;
	interestExpense: number;
	incomeBeforeTax: number;
	incomeTaxExpense: number;
	minorityInterest: number;
	netIncomeFromContinuingOps: number;
	discontinuedOperations: number;
	extraordinaryItems: number;
	effectOfAccountingCharges: number;
	otherItems: number;
	netIncome: number;
	netIncomeApplicableToCommonShares: number;
}

export default IncomeStatementDto;