import * as React from 'react';

interface IIconButton {
	icon: React.ReactNode;
}

const IconButton: React.FC<IIconButton> = ({ icon }) => {
	return (
		<button
			type='button'
			className='text-black hover:bg-gray-100 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-[#3b5998]/55'
		>
			<svg
				className='w-8 h-8'
				aria-hidden='true'
				focusable='false'
				data-prefix='fab'
				data-icon='facebook-f'
				role='img'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 320 512'
			>
				{icon}
			</svg>
		</button>
	);
};

export default IconButton;
