import IncomeStatementDto from './IncomeStatementDto';
import CashflowStatementsDto from './CashflowStatementsDto';
import BalanceSheetDto from './BalanceSheetDto';

interface FinancialDataResponseDto {
  incomeStatements: IncomeStatementDto[];
  balanceSheets: BalanceSheetDto[];
  cashFlowStatements: CashflowStatementsDto[];
}

export default FinancialDataResponseDto;
