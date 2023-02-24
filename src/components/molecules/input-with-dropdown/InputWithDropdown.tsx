import * as React from 'react';
import { useRef } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Loader from '../../atoms/loader/Loader';
import useOutsideAlerter from '../../../utils/hooks/useOutsideAlerter';

export interface IInputWithDropdownProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  children: React.ReactElement[];
  showDropdown?: boolean;
  isLoading?: boolean;
  className?: string;
}

const Container = styled.div(({ className }) => [
  tw`relative w-full`,
  className && tw`${className}`,
]);
const TextFieldContainer = tw.div`w-full flex items-center overflow-hidden min-w-[18rem] max-w-none mt-0 bg-white bg-gray-light rounded-md shadow-sm`;
const TextField = tw.input`w-full focus:outline-0 focus:ring-0 bg-inherit text-gray-dark pr-4 pt-2 pb-2 text-sm font-medium border-0 placeholder:text-gray`;
const Dropdown = tw.div`absolute z-10 divide-y overflow-y-auto w-full left-0 max-h-72 bg-white border-gray-light divide-gray-light mt-1 mb-1 rounded-md border shadow-lg`;

const InputWithDropdown: React.FC<IInputWithDropdownProps> = ({
  inputProps,
  children,
  showDropdown = true,
  isLoading = false,
  className,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useOutsideAlerter(containerRef, () => {
    setIsFocused(false);
  });

  return (
    <Container className={className} ref={containerRef}>
      <TextFieldContainer>
        <MagnifyingGlassIcon className='w-[1.5rem] mx-3 stroke-gray-dark opacity-70 stroke-[0.3px]' />
        <TextField
          type='text'
          {...inputProps}
          onFocus={() => setIsFocused(true)}
          onClick={() => setIsFocused(true)}
        />
      </TextFieldContainer>
      {isLoading && (
        <Dropdown className='h-32'>
          <Loader />
        </Dropdown>
      )}
      {isFocused && showDropdown && (
        <Dropdown onMouseDown={e => e.preventDefault()}>
          {React.Children.map(
            children,
            child =>
              child &&
              React.cloneElement(child, {
                onClick: () => {
                  child.props.onClick();
                  setIsFocused(false);
                },
              })
          )}
        </Dropdown>
      )}
    </Container>
  );
};

export default InputWithDropdown;
