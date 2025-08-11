import { signal } from '@angular/core';
import { FormlyModel } from '@devkitify/angular-ui-kit';

export const USERS_FORM: FormlyModel = {
	formClass: 'tw-grid tw-grid-cols-2 tw-gap-4',
	fields: [
		{
			type: 'textbox',
			control: 'name',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Name',
				placeholder: 'Enter your name',
				required: true,
			},
		},
		{
			type: 'textbox',
			control: 'username',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Username',
				placeholder: 'Enter your username',
				required: true,
			},
		},
		{
			type: 'textbox',
			control: 'email',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Email',
				placeholder: 'Enter your email',
				required: true,
				textbox: {
					textboxType: 'email',
				},
			},
		},
		{
			type: 'textbox',
			control: 'street',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Street',
				placeholder: 'Enter your street',
				required: true,
			},
		},
		{
			type: 'textbox',
			control: 'suite',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Suite',
				placeholder: 'Enter your suite',
				required: true,
			},
		},
		{
			type: 'dropdown',
			control: 'city',
			fieldClass: 'tw-col-span-1',
			optionKey: 'cityOptions',
			config: {
				label: 'City',
				placeholder: 'Enter your city',
				required: true,
				dropdown: {
					optionLabel: 'label',
					optionKey: 'value',
				},
			},
		},
		{
			type: 'textbox',
			control: 'zipcode',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Zip Code',
				placeholder: 'Enter your zip code',
				required: true,
			},
		},
		{
			type: 'textbox',
			control: 'lat',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Latitude',
				placeholder: 'Enter your latitude',
				required: true,
			},
		},
		{
			type: 'textbox',
			control: 'lng',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Longitude',
				placeholder: 'Enter your longitude',
				required: true,
			},
		},
		{
			type: 'textbox',
			control: 'phone',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Phone',
				placeholder: 'Enter your phone',
				required: true,
			},
		},
		{
			type: 'textbox',
			control: 'website',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Website',
				placeholder: 'Enter your website',
				required: true,
			},
		},
		{
			type: 'textbox',
			control: 'companyName',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Company Name',
				placeholder: 'Enter your company name',
				required: true,
			},
		},
		{
			type: 'textbox',
			control: 'catchPhrase',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Catch Phrase',
				placeholder: 'Enter your catch phrase',
				required: true,
			},
		},
		{
			type: 'textbox',
			control: 'bs',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'BS',
				placeholder: 'Enter your bs',
				required: true,
			},
		},
	],
	options: {
		cityOptions: signal<any[]>([
			{
				label: 'Gwenborough',
				value: 'Gwenborough',
			},
			{
				label: 'Wisokyburgh',
				value: 'Wisokyburgh',
			},
			{
				label: 'McKenziehaven',
				value: 'McKenziehaven',
			},
			{
				label: 'South Elvis',
				value: 'South Elvis',
			},
		]),
	},
};
