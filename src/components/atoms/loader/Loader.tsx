import * as React from 'react';
import tw, { TwStyle } from 'twin.macro';
import styled, { css } from 'styled-components';

type SpinnerSizes = 'small' | 'medium' | 'large';

interface ILoaderProps {
  customCss?: TwStyle;
  size?: SpinnerSizes;
}

const Container = styled.div(({ customCss }: { customCss?: TwStyle }) => {
  return css`
    & {
      ${tw`flex items-center justify-center h-full`}
      ${customCss || null}
    }
  `;
});

const Spinner = styled.div(({ size }: { size: SpinnerSizes }) => [
  tw`animate-spin inline-block border-t-indigo border-l-indigo border-r-indigo border-b-transparent rounded-full `,
  size === 'small' && tw`h-4 w-4 border-2`,
  size === 'medium' && tw`h-8 w-8 border-4`,
]);

const Loader: React.FC<ILoaderProps> = ({ customCss, size = 'medium' }) => {
  return (
    <Container customCss={customCss}>
      <Spinner size={size}>
        <span className='hidden'>Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Loader;
