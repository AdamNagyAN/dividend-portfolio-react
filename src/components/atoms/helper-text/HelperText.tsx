import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type ColorType = 'default' | 'error';

interface IHelperTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
	children: React.ReactNode;
	color?: ColorType;
}

const StyledParagraph = styled.p(({ color }: { color?: ColorType }) => [
	tw`text-xs text-gray-800 mt-2`,
	color === 'error' && tw`text-red-700`,
]);

const HelperText: React.FC<IHelperTextProps> = props => {
	const { children, color, ...otherProps } = props;
	return (
		<StyledParagraph color={color} {...otherProps}>
			{children}
		</StyledParagraph>
	);
};

export default HelperText;
