import * as React from 'react';
import { Bold, TableCell, TableRow } from '@tremor/react';
import { useTranslation } from 'react-i18next';
import CashflowStatementsDto from '../../../service/stock/dto/CashflowStatementsDto';
import IncomeStatementDto from '../../../service/stock/dto/IncomeStatementDto';

interface IFinancialTableRowForIncomeStatements {
  translationKey: 'income-statements';
  data: IncomeStatementDto[];
  dataKey: keyof IncomeStatementDto;
}

interface IFinancialTableRowForCashflowStatements {
  translationKey: 'cashflow-statements';
  data: CashflowStatementsDto[];
  dataKey: keyof CashflowStatementsDto;
}

const camelCaseToHyphen = (str: string) => {
  return str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);
};

const test = (str: string) => {
  const string = str.replace(/[A-Z]/g, m => ` ${m}`);
  return `"${string.slice(0, 1).toUpperCase()}${string.slice(
    1,
    string.length
  )}"`;
};

const FinancialTableRow: React.FC<
  | IFinancialTableRowForIncomeStatements
  | IFinancialTableRowForCashflowStatements
> = ({ translationKey, data, dataKey }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: `ticker.financials.${translationKey}`,
  });

  const formatter = Intl.NumberFormat('en-US', {
    useGrouping: true,
  });

  // @ts-ignore-next-line
  const isNullOnEveryDate = !data.find(it => !!it[dataKey]);

  if (isNullOnEveryDate) return null;

  return (
    <TableRow>
      <TableCell>
        <Bold>{t(camelCaseToHyphen(dataKey))}</Bold>
      </TableCell>
      {data.map(it => (
        <TableCell textAlignment='text-center' key={it.endDate}>
          {/* @ts-ignore-next-line */}
          {formatter.format(it[dataKey])}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default FinancialTableRow;
