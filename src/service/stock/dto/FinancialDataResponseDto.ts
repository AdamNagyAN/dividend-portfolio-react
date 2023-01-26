import IncomeStatementDto from './IncomeStatementDto';
import CashflowStatementsDto from './CashflowStatementsDto';

interface FinancialDataResponseDto {
  incomeStatements: IncomeStatementDto[];
  cashFlowStatements: CashflowStatementsDto[];
}

export default FinancialDataResponseDto;
