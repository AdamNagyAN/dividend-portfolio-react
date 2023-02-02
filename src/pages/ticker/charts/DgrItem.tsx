import * as React from 'react';
import { numberToPercent } from '../../../utils/number/number';

interface IDgrItem {
  label: string;
  value?: number;
}

const DgrItem: React.FC<IDgrItem> = ({ label, value }) => {
  return (
    <div className='font-bold bg-indigo-light py-2 px-4 text-sm rounded-md text-black'>
      {label} <span className='font-normal'>{numberToPercent(value)}</span>
    </div>
  );
};

export default DgrItem;
