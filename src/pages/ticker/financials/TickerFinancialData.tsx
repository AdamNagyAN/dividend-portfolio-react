import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '@tremor/react';
import tw from 'twin.macro';
import { useTranslation } from 'react-i18next';
import useGetFinancialData from '../../../query/stock/useGetFinancialData';
import TickerCashflowStatements from './TickerCashflowStatements';
import Tabs from '../../../components/molecules/tabs/Tabs';
import Tab from '../../../components/molecules/tabs/Tab';
import TickerIncomeStatements from './TickerIncomeStatements';
import Skeleton from '../../../components/atoms/skeleton/Skeleton';
import 'styled-components/macro';
import TickerBalanceSheets from './TickerBalanceSheets';

interface ITickerFinancialData {}

const TickerFinancialData: React.FC<ITickerFinancialData> = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'ticker.financials',
  });
  const [tabIndex, setTabIndex] = React.useState('1');
  const { symbol } = useParams<{ symbol: string }>();
  const { data } = useGetFinancialData(symbol);
  return (
    <Card marginTop='mt-4'>
      <Tabs
        customCss={tw`bg-gray-100 mb-12`}
        handleSelect={setTabIndex}
        selectedValue={tabIndex}
      >
        <Tab value='1'>{t('income-statements.title')}</Tab>
        <Tab value='2'>{t('balance-sheets.title')}</Tab>
        <Tab value='3'>{t('cashflow-statements.title')}</Tab>
      </Tabs>
      {!data && <Skeleton css={[tw`h-[800px]`]} />}
      {data && tabIndex === '1' && (
        <TickerIncomeStatements data={data.incomeStatements} />
      )}
      {data && tabIndex === '2' && (
        <TickerBalanceSheets data={data.balanceSheets} />
      )}
      {data && tabIndex === '3' && (
        <TickerCashflowStatements data={data.cashFlowStatements} />
      )}
    </Card>
  );
};

export default TickerFinancialData;
