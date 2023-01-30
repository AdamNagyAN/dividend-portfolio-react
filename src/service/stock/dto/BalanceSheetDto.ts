interface BalanceSheetDto {
  endDate: string;
  cash: number;
  shortTermInvestments: number;
  netReceivables: number;
  inventory: number;
  otherCurrentAssets: number;
  totalCurrentAssets: number;
  longTermInvestments: number;
  propertyPlantEquipment: number;
  goodWill: number;
  otherAssets: number;
  deferredLongTermAssetCharges: number;
  totalAssets: number;
  accountsPayable: number;
  shortLongTermDebt: number;
  otherCurrentLiab: number;
  longTermDebt: number;
  otherLiab: number;
  deferredLongTermLiab: number;
  minorityInterest: number;
  totalCurrentLiabilities: number;
  totalLiab: number;
  commonStock: number;
  retainedEarnings: number;
  treasuryStock: number;
  capitalSurplus: number;
  otherStockholderEquity: number;
  totalStockholderEquity: number;
  netTangibleAssets: number;
}

export default BalanceSheetDto;