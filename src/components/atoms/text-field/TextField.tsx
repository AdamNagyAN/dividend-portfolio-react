import * as React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import HelperText from '../helper-text/HelperText';

interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	helperText?: string;
	error?: boolean;
}

const StyledTextField = styled.input(({ error }: { error?: boolean }) => [
	tw`w-full bg-white rounded font-normal text-xs focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`,
	error && tw`border border-red-500`,
]);

const TextField: React.FC<ITextFieldProps> = props => {
	const { helperText, error, ...otherProps } = props;
	return (
		<div>
			<StyledTextField {...otherProps} error={error} />
			{helperText && (
				<HelperText color={error ? 'error' : undefined}>{helperText}</HelperText>
			)}
		</div>
	);
};

export default TextField;
