import * as React from 'react';
import styled, { css as styledCss } from 'styled-components';
import tw, { TwStyle } from 'twin.macro';

export interface ISkeletonProps {
  variant?: 'rectangular' | 'typography';
  css?: TwStyle[];
}

const CustomSkeleton = styled.div(
  ({ variant, css }: ISkeletonProps) => styledCss`
  ${tw`shadow animate-pulse w-full bg-gray-light`}
  ${variant === 'rectangular' && tw`h-72 rounded-sm`}
  ${variant === 'typography' && tw`h-3 rounded-full`}
  ${css}
  
`
);

const Skeleton: React.FC<ISkeletonProps> = props => {
  const { variant, ...other } = props;
  return (
    <CustomSkeleton variant={variant ?? 'rectangular'} {...other}>
      <span className='sr-only'>Loading...</span>
    </CustomSkeleton>
  );
};

export default Skeleton;
