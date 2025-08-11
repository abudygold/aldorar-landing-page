import { ButtonModel, ConfigFieldModel } from '@devkitify/angular-ui-kit';

export interface IViewList {
	searchTextbox: ConfigFieldModel;
	addNewButton: ButtonModel;
}

const SEARCH_TEXTBOX = (placeholder: string): ConfigFieldModel => {
	const search: ConfigFieldModel = {
		label: '',
		placeholder,
		textbox: {
			textboxType: 'text',
		},
	};

	return search;
};

const ADD_NEW_BUTTON = (label: string): ButtonModel =>
	new ButtonModel('flat', label, 'primary', false, '', '', 'add');

export const VIEW_LIST_FORM = (
	placeholder: string = 'Search by name',
	addNewLabel: string = 'Add New Data',
): IViewList => ({
	searchTextbox: SEARCH_TEXTBOX(placeholder),
	addNewButton: ADD_NEW_BUTTON(addNewLabel),
});
