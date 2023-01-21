import * as React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import 'styled-components/macro';
import Loader from '../../atoms/loader/Loader';

type buttonVariant = 'primary' | 'secondary' | 'icon';

interface IIconButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: React.ReactNode;
	text?: string;
	className?: string;
	variant?: buttonVariant;
	loading?: boolean;
}

interface StyledButtonProps {
	$variant?: buttonVariant;
	loading?: boolean;
}

const ButtonBody = styled.div(
	({ $variant = 'primary', loading }: StyledButtonProps) => [
		tw`w-full h-full text-black bg-red-200 focus:outline-none font-medium text-sm text-center inline-flex items-center justify-center`,
		tw`rounded-md flex items-center justify-center`,
		$variant === 'icon' && tw`hover:bg-gray-100 bg-white focus:bg-gray-100`,
		$variant === 'primary' &&
			tw`text-white hover:bg-indigo-800 bg-indigo-600 focus:bg-indigo-800`,
		$variant === 'secondary' &&
			tw`text-black hover:bg-gray-50 bg-white focus:bg-gray-100`,
		loading && tw`bg-gray-400 hover:bg-gray-400 cursor-default`,
	]
);

const IconButton: React.FC<IIconButton> = props => {
	const { icon, text, className, variant, loading, ...otherProps } = props;
	const handleOnClick = () => {};
	return (
		<button
			type='submit'
			className={className}
			onClick={handleOnClick}
			{...otherProps}
		>
			<ButtonBody $variant={variant} loading={loading}>
				{icon && icon}
				{loading && <Loader className='mr-2' size='small' />}
				{text && <p className='my-2'>{text}</p>}
			</ButtonBody>
		</button>
	);
};

export default IconButton;
