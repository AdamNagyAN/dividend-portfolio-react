import React from 'react';
import Snackbar, { ISnackbarProps } from './Snackbar';

export default {
	component: Snackbar,
	title: 'Snackbar',
};

const Template = (args: ISnackbarProps) => <Snackbar {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
	open: true,
	title: 'Default title',
	message: 'Default snackbar message',
};
