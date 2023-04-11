import * as React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import IconButton from '../../../components/molecules/buttons/IconButton';
import { ROUTES } from '../../../Routes';

interface ISubsciption {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  price: string;
  newPrice?: string;
  text: string[];
}

const Subsciption: React.FC<ISubsciption> = ({
  Icon,
  title,
  price,
  newPrice,
  text,
}) => {
  const navigate = useNavigate();
  const onChoose = () => {
    navigate(ROUTES.REGISTER);
  };
  return (
    <div className='border border-gray-300 shadow-lg rounded-lg p-6 text-center flex flex-col max-w-sm justify-between'>
      <h3 className='text-2xl font-bold mb-2 text-indigo-dark'>{title}</h3>
      <div className='flex items-center justify-center  mb-2'>
        <p className={`text-sm leading-7 ${newPrice ? 'line-through' : null}`}>
          $<span className='text-xl text-indigo-dark font-bold'>{price}</span>
          /month
        </p>
        <p className='ml-2 text-lg font-bold text-indigo-dark'> {newPrice}</p>
      </div>
      <Icon className='h-16 mb-4 text-indigo-dark' />
      <ul className='text-sm  leading-7 mb-4 text-left'>
        {text.map(it => (
          <li className='flex items-center' key={it}>
            <CheckIcon className='h-4 mr-2 text-indigo-dark' /> {it}
          </li>
        ))}
      </ul>
      <IconButton text='Choose' onClick={onChoose} />
    </div>
  );
};

export default Subsciption;
