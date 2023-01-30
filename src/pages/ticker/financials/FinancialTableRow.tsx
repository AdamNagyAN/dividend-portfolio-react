import * as React from 'react';
import { Bold, TableCell, TableRow } from '@tremor/react';
import { useTranslation } from 'react-i18next';
import CashflowStatementsDto from '../../../service/stock/dto/CashflowStatementsDto';
import IncomeStatementDto from '../../../service/stock/dto/IncomeStatementDto';
import BalanceSheetDto from '../../../service/stock/dto/BalanceSheetDto';

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

interface IFinancialTableRowForBalanceSheets {
  translationKey: 'balance-sheets';
  data: BalanceSheetDto[];
  dataKey: keyof BalanceSheetDto;
}

const camelCaseToHyphen = (str: string) => {
  return str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);
};

const FinancialTableRow: React.FC<
  | IFinancialTableRowForIncomeStatements
  | IFinancialTableRowForCashflowStatements
  | IFinancialTableRowForBalanceSheets
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
