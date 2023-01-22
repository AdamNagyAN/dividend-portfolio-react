import React from 'react';
import Skeleton, { ISkeletonProps } from './Skeleton';

export default {
	component: Skeleton,
	title: 'atoms/Skeleton',
};

const Template = (args: ISkeletonProps) => (
		<Skeleton {...args}/>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
};
