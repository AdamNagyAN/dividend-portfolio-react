// 	eslint-disable max-len
import * as React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import FinancialTableRow from './FinancialTableRow';
import BalanceSheetDto from '../../../service/stock/dto/BalanceSheetDto';

interface ITickerBalanceSheets {
  data: BalanceSheetDto[];
}

const TickerBalanceSheets: React.FC<ITickerBalanceSheets> = ({ data }) => {
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
        {/* prettier-ignore-start */}
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='cash'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='shortTermInvestments'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='netReceivables'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='inventory'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='otherCurrentAssets'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='totalCurrentAssets'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='longTermInvestments'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='propertyPlantEquipment'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='goodWill'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='otherAssets'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='deferredLongTermAssetCharges'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='totalAssets'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='accountsPayable'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='shortLongTermDebt'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='otherCurrentLiab'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='longTermDebt'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='otherLiab'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='deferredLongTermLiab'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='minorityInterest'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='totalCurrentLiabilities'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='totalLiab'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='commonStock'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='retainedEarnings'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='treasuryStock'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='capitalSurplus'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='otherStockholderEquity'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='totalStockholderEquity'
        />
        <FinancialTableRow
          translationKey='balance-sheets'
          data={data}
          dataKey='netTangibleAssets'
        />
        {/* prettier-ignore-end */}
      </TableBody>
    </Table>
  );
};

export default TickerBalanceSheets;
