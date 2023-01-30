import * as React from 'react';
import {
  Bold,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import { useTranslation } from 'react-i18next';
import CashflowStatementsDto from '../../../service/stock/dto/CashflowStatementsDto';
import FinancialTableRow from './FinancialTableRow';

interface ITickerCashflowStatements {
  data: CashflowStatementsDto[];
}

const TickerCashflowStatements: React.FC<ITickerCashflowStatements> = ({
  data,
}) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'ticker.financials.cashflow-statements',
  });
  const percentFormatter = new Intl.NumberFormat('us-US', {
    style: 'percent',
    maximumFractionDigits: 2,
  });
  // eslint-disable-next-line react/jsx-no-useless-fragment
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
          translationKey='cashflow-statements'
          data={data}
          dataKey='totalCashFromOperatingActivities'
        />
        <FinancialTableRow
          translationKey='cashflow-statements'
          data={data}
          dataKey='netIncome'
        />
        <FinancialTableRow
          translationKey='cashflow-statements'
          data={data}
          dataKey='totalCashflowsFromInvestingActivities'
        />
        <FinancialTableRow
          translationKey='cashflow-statements'
          data={data}
          dataKey='otherCashflowsFromInvestingActivities'
        />
        <FinancialTableRow
          translationKey='cashflow-statements'
          data={data}
          dataKey='totalCashFromFinancingActivities'
        />
        <FinancialTableRow
          translationKey='cashflow-statements'
          data={data}
          dataKey='otherCashflowsFromFinancingActivities'
        />
        <FinancialTableRow
          translationKey='cashflow-statements'
          data={data}
          dataKey='depreciation'
        />
        <FinancialTableRow
          translationKey='cashflow-statements'
          data={data}
          dataKey='capitalExpenditures'
        />
        <FinancialTableRow
          translationKey='cashflow-statements'
          data={data}
          dataKey='investments'
        />
        <FinancialTableRow
          translationKey='cashflow-statements'
          data={data}
          dataKey='dividendsPaid'
        />
        <FinancialTableRow
          translationKey='cashflow-statements'
          data={data}
          dataKey='netBorrowings'
        />
        <FinancialTableRow
          translationKey='cashflow-statements'
          data={data}
          dataKey='effectOfExchangeRate'
        />
        <FinancialTableRow
          translationKey='cashflow-statements'
          data={data}
          dataKey='changeInCash'
        />
        <FinancialTableRow
          translationKey='cashflow-statements'
          data={data}
          dataKey='issuanceOfStock'
        />
        <FinancialTableRow
          translationKey='cashflow-statements'
          data={data}
          dataKey='freeCashFlow'
        />
        <TableRow>
          <TableCell>
            <Bold>{t('dividend-per-cashflow')}</Bold>
          </TableCell>
          {data.map(it => {
            const ratio = (it.dividendsPaid / it.freeCashFlow) * -1;
            return (
              <TableCell key={it.endDate} textAlignment='text-center'>
                <span
                  className={
                    ratio > 0.75 || ratio < 0 ? 'text-red' : 'text-green'
                  }
                >
                  {percentFormatter.format(ratio)}
                </span>
              </TableCell>
            );
          })}
        </TableRow>
      </TableBody>
    </Table>
  );
};
export default TickerCashflowStatements;
