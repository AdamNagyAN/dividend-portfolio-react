import * as React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import IconButton from '../buttons/IconButton';
import 'styled-components/macro';

export interface ISnackbarProps {
	title?: string;
	message?: string;
	onClose?: () => void;
	open?: boolean;
}

const Snackbar: React.FC<ISnackbarProps> = ({
	onClose,
	message,
	title,
	open,
}) => {
	React.useEffect(() => {
		const closeInterval = setInterval(() => {
			if (onClose) {
				onClose();
			}
		}, 5000);

		return () => clearInterval(closeInterval);
	}, [onClose]);

	if (!open) return null;

	return (
		<div className='fixed bottom-10 bg-gray-300 text-sm rounded-sm w-5/6 mx-auto right-1/2 translate-x-1/2'>
			<div className='relative p-6'>
				<IconButton
					className='absolute right-4 top-4'
					icon={<XMarkIcon className='w-5 h-5 m-1' />}
					onClick={onClose}
					variant='icon'
				/>
				<p className='font-medium'>{title}</p>
				{message && <p className='pt-2'>{message}</p>}
			</div>
		</div>
	);
};

export default Snackbar;
