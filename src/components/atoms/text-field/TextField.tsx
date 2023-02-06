import * as React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import HelperText from '../helper-text/HelperText';

export interface ITextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
  error?: boolean;
}

const StyledTextField = styled.input(({ error }: { error?: boolean }) => [
  tw`w-full bg-white rounded font-normal text-xs focus:border-indigo focus:ring-2 focus:ring-indigo-light text-base outline-none text-gray-dark py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`,
  error && tw`border border-red`,
]);

const TextField: React.FC<ITextFieldProps> = props => {
  const { helperText, error, ...otherProps } = props;
  return (
    <div className='w-full'>
      <StyledTextField {...otherProps} error={error} />
      {helperText && (
        <HelperText color={error ? 'error' : undefined}>
          {helperText}
        </HelperText>
      )}
    </div>
  );
};

export default TextField;
