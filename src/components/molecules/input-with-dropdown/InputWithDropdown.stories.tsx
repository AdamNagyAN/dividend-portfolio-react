import React from 'react';

import InputWithDropdown, {
	IInputWithDropdownProps,
} from './InputWithDropdown';

export default {
	component: InputWithDropdown,
	title: 'InputWithDropdown',
};

const Template = (args: IInputWithDropdownProps) => (
	<InputWithDropdown {...args} />
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
	inputProps: {
		value: 'asd',
	},
};
