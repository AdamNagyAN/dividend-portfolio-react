import styled, { css } from 'styled-components';
import tw from 'twin.macro';

const Tab = styled.button(
	({ $selected }: { $selected?: boolean }) =>
		css`
			${tw` py-2 px-4 rounded-md flex-1 w-0 font-bold text-sm flex items-center justify-center w-fit`}
			${$selected && tw`bg-indigo-dark py-2 px-4 text-white`}
		`
);

export default Tab;
