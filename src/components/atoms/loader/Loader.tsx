import * as React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

type SpinnerSizes = 'small' | 'medium' | 'large';

interface ILoaderProps {
	className?: React.ComponentProps<'div'>['className'];
	size?: SpinnerSizes;
}

const Container = styled.div(({ className }: { className?: string }) => [
	tw`flex items-center justify-center h-full`,
	className && tw`${className}`,
]);

const Spinner = styled.div(({ size }: { size: SpinnerSizes }) => [
	tw`animate-spin inline-block border-t-indigo border-l-indigo border-r-indigo border-b-transparent rounded-full `,
	size === 'small' && tw`h-4 w-4 border-2`,
	size === 'medium' && tw`h-8 w-8 border-4`,
]);

const Loader: React.FC<ILoaderProps> = ({ className, size = 'medium' }) => {
	return (
		<Container className={className}>
			<Spinner size={size}>
				<span className='hidden'>Loading...</span>
			</Spinner>
		</Container>
	);
};

export default Loader;
