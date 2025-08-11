import { TableModel } from '@devkitify/angular-ui-kit';

export const EXAMPLE_DUMMY_DATA = [
	{
		name: 'John Doe',
		statusName: 'Active',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Jane Smith',
		statusName: 'Inactive',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Alice Johnson',
		statusName: 'Pending',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Bob Brown',
		statusName: 'Active',
		createdDate: new Date().toISOString(),
		total: 12300,
		isSelected: false,
	},
	{
		name: 'Charlie Davis',
		statusName: 'Inactive',
		createdDate: new Date().toISOString(),
		total: 12200,
		isSelected: false,
	},
	{
		name: 'Diana Evans',
		statusName: 'Active',
		createdDate: new Date().toISOString(),
		total: 12100,
		isSelected: false,
	},
	{
		name: 'Frank Green',
		statusName: 'Pending',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Grace Hall',
		statusName: 'Active',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Henry Irwin',
		statusName: 'Inactive',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Ivy Jenkins',
		statusName: 'Pending',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Henry',
		statusName: 'Inactive',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Ivy',
		statusName: 'Pending',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
];

export const EXAMPLES_TABLE: TableModel = new TableModel();
EXAMPLES_TABLE.columns = [
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
		key: 'statusName',
		label: 'Status Name',
		sortable: true,
	},
	{
		key: 'createdDate',
		label: 'Created Date',
		sortable: false,
	},
	{
		key: 'total',
		label: 'Total Payment',
		sortable: true,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
EXAMPLES_TABLE.dataTotal = EXAMPLE_DUMMY_DATA.length;
EXAMPLES_TABLE.dataSource = EXAMPLE_DUMMY_DATA;
EXAMPLES_TABLE.sortKey = 'name';
EXAMPLES_TABLE.sortOrder = 'asc';
EXAMPLES_TABLE.isHttpPagination.set(false);
EXAMPLES_TABLE.generateDataType();
EXAMPLES_TABLE.dataType = {
	...EXAMPLES_TABLE.dataType,
	createdDate: {
		type: 'date',
		format: 'M/d/yyyy hh:mma',
	},
	statusName: {
		type: 'custom',
	},
	selection: {
		type: 'custom',
	},
	total: {
		type: 'currency',
		currency: 'IDR',
		locale: 'id-ID',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	},
	actions: {
		type: 'custom',
	},
};
