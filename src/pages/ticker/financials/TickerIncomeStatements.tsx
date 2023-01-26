// 	eslint-disable max-len
import * as React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import IncomeStatementDto from '../../../service/stock/dto/IncomeStatementDto';
import FinancialTableRow from './FinancialTableRow';

interface ITickerIncomeStatements {
  data: IncomeStatementDto[];
}

const TickerIncomeStatements: React.FC<ITickerIncomeStatements> = ({
  data,
}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <td />
          {data.map(item => (
            <TableHeaderCell textAlignment='text-center' key={item.endDate}>
              {item.endDate}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='totalRevenue'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='costOfRevenue'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='grossProfit'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='researchDevelopment'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='sellingGeneralAdministrative'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='nonRecurring'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='otherOperatingExpenses'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='totalOperatingExpenses'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='operatingIncome'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='totalOtherIncomeExpenseNet'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='ebit'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='interestExpense'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='incomeBeforeTax'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='incomeTaxExpense'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='minorityInterest'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='netIncomeFromContinuingOps'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='discontinuedOperations'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='extraordinaryItems'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='effectOfAccountingCharges'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='otherItems'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='netIncome'
        />
        <FinancialTableRow
          translationKey='income-statements'
          data={data}
          dataKey='netIncomeApplicableToCommonShares'
        />
      </TableBody>
    </Table>
  );
};

export default TickerIncomeStatements;
