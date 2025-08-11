import { signal } from '@angular/core';
import { FormlyModel } from '@devkitify/angular-ui-kit';
import moment from 'moment';

export const EXAMPLE_FORM: FormlyModel = {
	formClass: 'tw-grid tw-grid-cols-12 tw-gap-4',
	fields: [
		{
			type: 'textbox',
			control: 'name',
			fieldClass: 'tw-col-span-6',
			config: {
				label: 'Name',
				placeholder: 'Enter name',
				required: true,
			},
		},
		{
			type: 'textbox',
			control: 'onlyNumber',
			fieldClass: 'tw-col-span-6',
			config: {
				label: 'Input Number',
				placeholder: 'Enter number',
				required: true,
				textbox: {
					textboxType: 'number',
				},
			},
		},
		{
			type: 'textbox',
			control: 'password',
			fieldClass: 'tw-col-span-6',
			config: {
				label: 'Input Password',
				placeholder: 'Enter Password',
				required: true,
				textbox: {
					textboxType: 'password',
				},
			},
		},
		{
			type: 'autocomplete',
			control: 'autocomplete',
			fieldClass: 'tw-col-span-6',
			optionKey: 'arrayOfObject',
			config: {
				label: 'Autocomplete Returning Object',
				placeholder: 'Select gender',
				required: true,
				autocomplete: {
					optionLabel: 'label',
				},
			},
		},
		{
			type: 'autocomplete',
			control: 'autocomplete1',
			fieldClass: 'tw-col-span-6',
			optionKey: 'arrayOfString',
			config: {
				label: 'Autocomplete Returning String',
				placeholder: 'Select gender',
				required: true,
			},
		},
		{
			type: 'textarea',
			control: 'description',
			fieldClass: 'tw-col-span-12',
			config: {
				label: 'Description',
				placeholder: 'Please add description here',
				required: true,
				textarea: {
					rows: 5,
				},
			},
		},
		{
			type: 'dropdown',
			control: 'gender',
			fieldClass: 'tw-col-span-4',
			optionKey: 'arrayOfObject',
			config: {
				label: 'Dropdown Returning Object',
				placeholder: 'Select a gender',
				hint: 'options is array of object',
				required: true,
				dropdown: {
					optionLabel: 'label',
				},
			},
		},
		{
			type: 'dropdown',
			control: 'gender',
			fieldClass: 'tw-col-span-4',
			optionKey: 'arrayOfObject',
			config: {
				label: 'Dropdown Returning String',
				placeholder: 'Select a gender',
				hint: 'options is array of object',
				required: true,
				dropdown: {
					optionLabel: 'label',
					optionKey: 'value',
				},
			},
		},
		{
			type: 'dropdown',
			control: 'gender',
			fieldClass: 'tw-col-span-4',
			optionKey: 'arrayOfString',
			config: {
				label: 'Dropdown Returning String',
				placeholder: 'Select a gender',
				hint: 'options is array of string',
				required: true,
			},
		},
		{
			type: 'datepicker',
			control: 'birthOfDate',
			fieldClass: 'tw-col-span-6',
			config: {
				label: 'Datepicker',
				placeholder: 'Select Datepicker',
				required: true,
				datepicker: {
					minDate: moment(new Date()).subtract(6, 'months').toDate(),
					maxDate: moment(new Date()).add(6, 'months').toDate(),
					datepickerFilter: (d: Date | null): boolean => {
						const day = (d || new Date()).getDay();
						// Prevent Saturday and Sunday from being selected.
						return day !== 0 && day !== 6;
					},
				},
			},
		},
		{
			type: 'datepicker',
			control: 'rangeDatepicker',
			fieldClass: 'tw-col-span-6',
			config: {
				label: 'Range Datepicker',
				placeholder: 'Select Range Datepicker',
				required: true,
				datepicker: {
					isRangeDate: true,
					placeholderStart: 'Start Date',
					placeholderEnd: 'End Date',
					minDate: moment(new Date()).subtract(6, 'months').toDate(),
					maxDate: moment(new Date()).add(6, 'months').toDate(),
					datepickerFilter: (d: Date | null): boolean => {
						const day = (d || new Date()).getDay();
						// Prevent Saturday and Sunday from being selected.
						return day !== 0 && day !== 6;
					},
				},
			},
		},
		{
			type: 'radio',
			control: 'radio',
			fieldClass: 'tw-col-span-4',
			optionKey: 'arrayOfObject',
			config: {
				label: 'Radio Returning Object (Options is array of object)',
				placeholder: 'Select a gender',
				required: true,
				radio: {
					optionLabel: 'label',
					isVertical: true,
				},
			},
		},
		{
			type: 'radio',
			control: 'radio',
			fieldClass: 'tw-col-span-4',
			optionKey: 'arrayOfObject',
			config: {
				label: 'Radio Returning String (Options is array of object)',
				placeholder: 'Select a gender',
				required: true,
				radio: {
					optionLabel: 'label',
					optionKey: 'value',
					isVertical: true,
				},
			},
		},
		{
			type: 'radio',
			control: 'radio',
			fieldClass: 'tw-col-span-4',
			optionKey: 'arrayOfString',
			config: {
				label: 'Radio Returning String (Options is array of string)',
				placeholder: 'Select a gender',
				required: true,
				radio: {
					isVertical: true,
				},
			},
		},
		{
			type: 'checkbox',
			control: 'checkbox',
			fieldClass: 'tw-col-span-4',
			optionKey: 'arrayOfObject',
			config: {
				label: 'Checkbox Returning Object',
				placeholder: 'Select a gender',
				required: true,
				checkbox: {
					optionLabel: 'label',
					isVertical: true,
				},
			},
		},
		{
			type: 'checkbox',
			control: 'checkbox2',
			fieldClass: 'tw-col-span-4',
			optionKey: 'arrayOfString',
			config: {
				label: 'Radio Returning String',
				placeholder: 'Select a gender',
				required: true,
				checkbox: {
					isVertical: true,
				},
			},
		},
		{
			type: 'checkbox',
			control: 'parentCheckbox',
			fieldClass: 'tw-col-span-4',
			optionKey: 'parentTaskOption',
			config: {
				label: 'Parent Options',
				placeholder: 'Select a gender',
				required: true,
				checkbox: {
					optionLabel: 'label',
					optionChildKey: 'children',
					isVertical: true,
				},
			},
		},
		{
			type: 'chip',
			control: '',
			fieldClass: 'tw-col-span-6',
			optionKey: 'chipOptions',
			config: {
				label: 'Avatar Chip',
				required: true,
				chip: {
					chipType: 'avatar',
					optionLabel: 'label',
					optionAvatar: 'avatar',
				},
			},
		},
		{
			type: 'chip',
			control: '',
			fieldClass: 'tw-col-span-6',
			optionKey: 'arrayOfObject',
			config: {
				label: 'Drag & Drop Chip',
				required: true,
				chip: {
					chipType: 'dragdrop',
					optionLabel: 'label',
				},
			},
		},
		{
			type: 'chip',
			control: 'chipInput',
			fieldClass: 'tw-col-span-4',
			config: {
				label: 'Input Tag',
				placeholder: 'Input a tag',
				required: true,
				chip: {
					chipType: 'input',
					optionLabel: 'label',
				},
			},
		},
		{
			type: 'chip',
			control: 'chipAutocomplete',
			fieldClass: 'tw-col-span-4',
			optionKey: 'chipOptions2',
			config: {
				label: 'Chip Autocomplete Returning Object',
				placeholder: 'Input a tag',
				required: true,
				chip: {
					chipType: 'autocomplete',
					optionLabel: 'label',
				},
			},
		},
		{
			type: 'chip',
			control: 'chipAutocomplete1',
			fieldClass: 'tw-col-span-4',
			optionKey: 'chipOptions3',
			config: {
				label: 'Chip Autocomplete Returning String',
				placeholder: 'Input a tag',
				required: true,
				chip: {
					chipType: 'autocomplete',
				},
			},
		},
		{
			type: 'datepicker',
			control: 'birthOfDate',
			fieldClass: 'tw-col-span-4',
			config: {
				label: 'Inline Datepicker',
				required: true,
				datepicker: {
					isInline: true,
					minDate: moment(new Date()).subtract(6, 'months').toDate(),
					maxDate: moment(new Date()).add(6, 'months').toDate(),
					datepickerFilter: (d: Date | null): boolean => {
						const day = (d || new Date()).getDay();
						// Prevent Saturday and Sunday from being selected.
						return day !== 0 && day !== 6;
					},
				},
			},
		},
		{
			type: 'button-toggle',
			control: 'buttonToggle',
			fieldClass: 'tw-col-span-12',
			config: {
				label: 'I agree to the terms and conditions',
				required: true,
			},
		},
	],
	options: {
		arrayOfString: signal<any[]>(['Male', 'Female']),
		arrayOfObject: signal<any[]>([
			{
				label: 'Male',
				value: 'male',
			},
			{
				label: 'Female',
				value: 'female',
			},
		]),
		parentTaskOption: signal<any>({
			name: 'Parent task',
			completed: false,
			children: [
				{
					label: 'Male',
					value: 'male',
					completed: false,
				},
				{
					label: 'Female',
					value: 'female',
					completed: false,
				},
			],
		}),
		chipOptions: signal<any[]>([
			{ label: 'Dog one', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
			{ label: 'Dog two', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
			{ label: 'Dog three', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
		]),
		chipOptions2: signal<any[]>([
			{ label: 'Dog one' },
			{ label: 'Dog two' },
			{ label: 'Dog three' },
		]),
		chipOptions3: signal<any[]>(['Dog one', 'Dog two', 'Dog three']),
	},
};
