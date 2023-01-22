import * as React from 'react';

export interface ISkeletonProps {}

const Skeleton: React.FC<ISkeletonProps> = () => {
	return (
		<div
			role='status'
			className='p-4 w-full rounded border border-gray-light shadow animate-pulse md:p-6 dark:border-gray-light bg-white'
		>
			<div className='h-6 bg-gray-light rounded-full dark:bg-gray-300 w-64 mb-6' />
			<div className='w-full h-72 bg-gray-light rounded-sm dark:bg-gray-300' />
			<span className='sr-only'>Loading...</span>
		</div>
	);
};

export default Skeleton;
