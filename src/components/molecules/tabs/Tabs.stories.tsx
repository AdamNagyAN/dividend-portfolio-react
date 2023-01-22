import React from 'react';
import Tabs, { ITabsProps } from './Tabs';
import Tab from './Tab';

export default {
	component: Tabs,
	title: 'molecules/Tabs',
};

const Template = (args: ITabsProps) => {


	return (
		<Tabs {...args}>
			<Tab value='1'>asd</Tab>
			<Tab value='2'>asd</Tab>
			<Tab value='3'>asd</Tab>
		</Tabs>
	);
};

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
	selectedValue: '3',
};
