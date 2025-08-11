import { ButtonModel, ConfigFieldModel, FormlyModel } from '@devkitify/angular-ui-kit';

export const LOGIN_FORM: FormlyModel = {
	formClass: 'tw-grid tw-grid-cols-2 tw-gap-4',
	options: {},
	fields: [
		{
			type: 'textbox',
			control: 'email',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Email',
				placeholder: 'name@company.com',
				hint: 'admin@example.com',
				required: true,
				textbox: {
					textboxType: 'email',
				},
			},
		},
		{
			type: 'textbox',
			control: 'password',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Password',
				placeholder: '••••••••',
				hint: '12345678',
				required: true,
				textbox: {
					textboxType: 'password',
				},
			},
		},
	],
};

export const REMEMBER_ME: ConfigFieldModel = {
	label: 'Remember me',
};

export const LOGIN_BY_GOOGLE_BUTTON: ButtonModel = new ButtonModel(
	'stroked',
	'Sign in with Google',
	'primary',
	false,
	'tw-w-full !tw-h-10',
	'',
	'android',
	'start',
);

export const LOGIN_SUBMIT_BUTTON: ButtonModel = new ButtonModel(
	'flat',
	'Sign in to your account',
	'primary',
	false,
	'tw-w-full !tw-h-10',
	'',
	'android',
	'start',
);
