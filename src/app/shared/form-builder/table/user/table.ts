import { TableModel } from '@devkitify/angular-ui-kit';

export const USERS_TABLE: TableModel = new TableModel();
USERS_TABLE.columns = [
	{
		key: 'selection',
		label: '',
		sortable: false,
	},
	{
		key: 'name',
		label: 'Name',
		sortable: true,
	},
	{
		key: 'username',
		label: 'Username',
		sortable: true,
	},
	{
		key: 'email',
		label: 'Email',
		sortable: false,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
USERS_TABLE.sortKey = 'name';
USERS_TABLE.sortOrder = 'asc';
USERS_TABLE.isHttpPagination.set(false);
