import React from 'react';
import { CustomStyles } from '../../../styles/GlobalStyles';

export default {
	component: 'div',
	title: 'atoms/Typography',
};

const Template = () => (
	<>
	<CustomStyles/>
	<div>
		<h1>H1 heading</h1>
		<h2>H2 heading</h2>
		<h3>H3 heading</h3>
		<h4>H4 heading</h4>
		<h5>H5 heading</h5>
		<p>Paragraph typography</p>
	</div>
	</>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {

};
