interface StockSummaryResponseDto {
	companyName: string;
	symbol: string;
	marketCap: number;
	eps: number;
	pe: number;
	oneYearTargetPrice: number;
	price: number;
	earningsAnnouncement: string;
	annualDividendYield: number;
	annualDividendYieldPercent: number;
}

export default StockSummaryResponseDto;
