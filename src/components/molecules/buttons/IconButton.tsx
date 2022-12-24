import * as React from 'react';
import tw from 'twin.macro';

interface IIconButton {
	icon: React.ReactNode;
	text?: string;
}

const Button = tw.button`text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 font-medium rounded-lg text-sm text-center inline-flex items-center`;
const ButtonText = tw.span`mr-2`;

const IconButton: React.FC<IIconButton> = ({ icon, text }) => {
	return (
		<Button type='button'>
			<svg
				className='w-8 h-8'
				aria-hidden='true'
				focusable='false'
				role='img'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 320 512'
			>
				{icon}
			</svg>
			{text && <ButtonText>{text}</ButtonText>}
		</Button>
	);
};

export default IconButton;
