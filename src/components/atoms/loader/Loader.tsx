import * as React from 'react';

const Loader: React.FC = () => {
	return (
		<div className='flex items-center justify-center h-full'>
			<div
				className='spinner-border animate-spin inline-block w-8 h-8 border-4 border-t-black border-l-black border-r-black rounded-full'
				role='status'
			>
				<span className='hidden'>Loading...</span>
			</div>
		</div>
	);
};

export default Loader;
