import * as React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import 'styled-components/macro';
import Loader from '../../atoms/loader/Loader';

type buttonVariant = 'primary' | 'secondary' | 'icon' | 'text';

export interface IIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  text?: string;
  className?: string;
  variant?: buttonVariant;
  loading?: boolean;
}

interface StyledButtonProps {
  $variant?: buttonVariant;
  loading?: boolean;
}

const ButtonBody = styled.span(
  ({ $variant = 'primary', loading }: StyledButtonProps) => [
    tw`w-full h-full text-black bg-red-light focus:outline-none whitespace-nowrap font-medium text-sm text-center inline-flex items-center justify-center px-4`,
    tw`rounded-md flex items-center justify-center`,
    $variant === 'icon' && tw`bg-inherit hover:text-black px-0`,
    $variant === 'primary' &&
      tw`text-white hover:bg-indigo-dark bg-indigo focus:bg-indigo-dark`,
    $variant === 'secondary' &&
      tw`text-black hover:bg-gray-50 bg-white focus:bg-gray-light`,
    $variant === 'text' &&
      tw`text-black hover:bg-gray-50 bg-white focus:bg-gray-light`,
    loading && tw`bg-gray-dark hover:bg-gray-dark cursor-default`,
  ]
);

const IconButton: React.FC<IIconButtonProps> = props => {
  const { icon, text, className, variant, loading, ...otherProps } = props;
  const handleOnClick = () => {};
  return (
    <button
      type='submit'
      className={className}
      onClick={handleOnClick}
      {...otherProps}
    >
      <ButtonBody $variant={variant} loading={loading}>
        {icon && icon}
        {loading && <Loader className='mr-2' size='small' />}
        {text && <span className='my-2'>{text}</span>}
      </ButtonBody>
    </button>
  );
};

export default IconButton;
