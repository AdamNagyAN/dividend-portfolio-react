import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

export const CustomStyles = createGlobalStyle`
  body {
    ${tw`bg-gray-light font-montserrat`}
  }

  #root {
    ${tw`min-h-screen flex flex-col`}
  }
		
		h1{
				${tw`text-3xl font-extrabold dark:text-white`}
		}

  h2{
    ${tw`text-2xl font-bold dark:text-white`}
  }

  h3{
    ${tw`text-lg font-bold dark:text-white`}
  }
  

	h6{
    ${tw`text-lg font-bold dark:text-white`}
  }
	
	p{
			${tw`font-normal text-gray-dark dark:text-gray-100 text-sm`}
	}


`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
