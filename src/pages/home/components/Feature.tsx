import * as React from 'react';

interface IFeature {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

const Feature: React.FC<IFeature> = ({ Icon, title, text }) => {
  return (
    <div className='border border-gray-300 shadow-lg rounded-lg p-6 text-center flex flex-col max-w-sm'>
      <Icon className='h-12 mb-4 text-indigo-dark' />
      <h3 className='mb-4 text-indigo-dark'>{title}</h3>
      <p className='leading-7'>{text}</p>
    </div>
  );
};

export default Feature;
