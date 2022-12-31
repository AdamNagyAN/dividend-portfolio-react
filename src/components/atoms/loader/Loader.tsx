import * as React from 'react';

interface ILoaderProps {
	className?: string;
	size?: number;
	border?: number;
}

const Loader: React.FC<ILoaderProps> = ({
	className,
	size = 8,
	border = 4,
}) => {
	return (
		<div className={`flex items-center justify-center h-full ${className}`}>
			<div
				className={`spinner-border animate-spin inline-block w-${size} h-${size} border-${border} border-t-indigo-600 border-l-indigo-600 border-r-indigo-600 border-b-transparent rounded-full`}
				role='status'
			>
				<span className='hidden'>Loading...</span>
			</div>
		</div>
	);
};

export default Loader;
