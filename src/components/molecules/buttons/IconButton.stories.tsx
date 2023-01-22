import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import IconButton, { IIconButtonProps } from './IconButton';

export default {
	component: IconButton,
	title: 'molecules/IconButton',
};

const Template = (args: IIconButtonProps) => (
	<IconButton {...args}/>
);

export const Text = Template.bind({});
// @ts-ignore
Text.args = {
	text: "Button"
};

export const Loading = Template.bind({});
// @ts-ignore
Loading.args = {
	text: "Button",
	loading: true
};

const IconTemplate = (args: IIconButtonProps) => (
	<IconButton icon={<XMarkIcon className="h-6 w-6 m-2"/>} {...args}/>
);

export const Icon = IconTemplate.bind({});
// @ts-ignore
Icon.args = {
	variant: 'primary'
};




