import React from 'react';
import TextField, { ITextFieldProps } from './TextField';

export default {
	component: TextField,
	title: 'atoms/TextField',
};

const Template = (args: ITextFieldProps) => (
	<div className="bg-gray-light p-5">
	<TextField {...args}/>
	</div>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
	helperText: 'Default helper text'
};
