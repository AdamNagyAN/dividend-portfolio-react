import * as React from 'react';
import tw from 'twin.macro';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Loader from '../../atoms/loader/Loader';

export interface IInputWithDropdownProps {
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
	children?: React.ReactNode;
	showDropdown?: boolean;
	isLoading?: boolean;
}

const Container = tw.div`relative`;
const TextFieldContainer = tw.div`w-full flex items-center overflow-hidden min-w-[18rem] max-w-none mt-0 bg-white bg-gray-100 rounded-md shadow-sm`;
const TextField = tw.input`w-full focus:outline-0 focus:ring-0 bg-inherit text-gray-700 pr-4 pt-2 pb-2 text-sm font-medium border-0 placeholder:text-gray-500`;
const Dropdown = tw.div`absolute z-10 divide-y overflow-y-auto w-full left-0 max-h-72 bg-white border-gray-200 divide-gray-200 mt-1 mb-1 rounded-md border shadow-lg`;

const InputWithDropdown: React.FC<IInputWithDropdownProps> = ({
	inputProps,
	children,
	showDropdown = true,
	isLoading = false,
}) => {
	const [isFocused, setIsFocused] = React.useState(false);

	return (
		<Container onClick={() => setIsFocused(true)}>
			<TextFieldContainer>
				<MagnifyingGlassIcon className='w-[1.5rem] mx-3 stroke-gray-700 opacity-70 stroke-[0.3px]' />
				<TextField
					type='text'
					{...inputProps}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>
			</TextFieldContainer>
			{isLoading && (
				<Dropdown className='h-32'>
					<Loader />
				</Dropdown>
			)}
			{isFocused && showDropdown && (
				<Dropdown onMouseDown={e => e.preventDefault()}>{children}</Dropdown>
			)}
		</Container>
	);
};

export default InputWithDropdown;
