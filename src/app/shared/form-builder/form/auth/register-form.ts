import { ButtonModel, FormlyModel } from '@devkitify/angular-ui-kit';

export const REGISTER_FORM: FormlyModel = {
	formClass: 'tw-grid tw-grid-cols-1 tw-gap-4',
	options: {},
	fields: [
		{
			type: 'textbox',
			control: 'email',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Email',
				placeholder: 'name@company.com',
				textbox: {
					textboxType: 'email',
				},
			},
		},
	],
};

export const REGISTER_SEND_BUTTON: ButtonModel = new ButtonModel(
	'flat',
	'Send',
	'primary',
	false,
	'tw-w-full !tw-h-10',
);
