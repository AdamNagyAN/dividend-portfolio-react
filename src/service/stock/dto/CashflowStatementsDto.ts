interface CashflowStatementsDto {
	endDate: string;
	totalCashFromOperatingActivities: number;
	netIncome: number;
	totalCashflowsFromInvestingActivities: number;
	otherCashflowsFromInvestingActivities: number;
	totalCashFromFinancingActivities: number;
	otherCashflowsFromFinancingActivities: number;
	depreciation: number;
	capitalExpenditures: number;
	investments: number;
	dividendsPaid: number;
	netBorrowings: number;
	effectOfExchangeRate: number;
	changeInCash: number;
	issuanceOfStock: number;
	freeCashFlow: number;
}

export default CashflowStatementsDto;
