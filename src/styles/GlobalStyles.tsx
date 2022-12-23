import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`bg-gray-100`}
  }
`;

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
);

export default GlobalStyles;
