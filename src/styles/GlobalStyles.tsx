import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

export const CustomStyles = createGlobalStyle`
  body {
    ${tw`bg-gray-light`}
  }

  #root {
    ${tw`min-h-screen flex flex-col`}
  }
		
		h1{
				${tw`text-5xl font-extrabold dark:text-white`}
		}

  h2{
    ${tw`text-4xl font-bold dark:text-white`}
  }

  h3{
    ${tw`text-3xl font-bold dark:text-white`}
  }

  h4{
    ${tw`text-2xl font-bold dark:text-white`}
  }

	h5{
    ${tw`text-xl font-bold dark:text-white`}
  }

	h6{
    ${tw`text-lg font-bold dark:text-white`}
  }
	
	p{
			${tw`font-medium text-gray-dark dark:text-gray-100`}
	}


`;

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
);

export default GlobalStyles;
