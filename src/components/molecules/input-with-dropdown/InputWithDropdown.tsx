import * as React from 'react';
import tw from 'twin.macro';

export interface IInputWithDropdownProps {
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
	children?: React.ReactNode;
	showDropdown?: boolean;
}

const Container = tw.div`relative`;
const TextFieldContainer = tw.div`w-full flex items-center overflow-hidden min-w-[10rem] max-w-none mt-0 bg-white border-gray-300 rounded-md border shadow-sm`;
const TextField = tw.input`w-full focus:outline-0 focus:ring-0 bg-inherit text-gray-700 pl-4 pr-4 pt-2 pb-2 text-sm font-medium border-0 placeholder:text-gray-500`;
const Dropdown = tw.div`absolute z-10 divide-y overflow-y-auto w-full left-0 max-h-72 bg-white border-gray-200 divide-gray-200 mt-1 mb-1 rounded-md border shadow-lg`;

const InputWithDropdown: React.FC<IInputWithDropdownProps> = ({
	inputProps,
	children,
	showDropdown = true,
}) => {
	const [isFocused, setIsFocused] = React.useState(false);
	return (
		<Container
			tabIndex={0}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
		>
			<TextFieldContainer>
				<TextField type='text' {...inputProps} />
			</TextFieldContainer>
			{isFocused && showDropdown && <Dropdown>{children}</Dropdown>}
		</Container>
	);
};

export default InputWithDropdown;