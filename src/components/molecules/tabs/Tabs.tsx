import * as React from 'react';
import tw, { TwStyle } from 'twin.macro';
import styled, { css } from 'styled-components';

interface ITabs {
	selectedValue?: string;
	handleSelect: (value: string) => void;
	children: React.ReactElement[];
	customCss?: TwStyle;
}

const CustomTabs = styled.div(
	({ customCss }: { customCss?: TwStyle }) => css`
		& {
			${tw`bg-white flex space-x-2 rounded-md`}
			${customCss}
		}
	`
);

const Tabs: React.FC<ITabs> = ({
	selectedValue,
	handleSelect,
	children,
	customCss,
}) => {
	return (
		<CustomTabs customCss={customCss}>
			{React.Children.map(children, child =>
				React.cloneElement(child, {
					$selected: selectedValue === child.props.value,
					onClick: () => handleSelect(child.props.value),
				})
			)}
		</CustomTabs>
	);
};

export default Tabs;
