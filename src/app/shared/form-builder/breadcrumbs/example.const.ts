import { BreadcrumbModel } from '@devkitify/angular-ui-kit';

export const EXAMPLE_LIST_BREADCRUMB: BreadcrumbModel[] = [
	{ label: 'Dashboard', icon: 'home', url: '/dashboard' },
	{ label: 'Example', icon: 'lists' },
];

export const EXAMPLE_ADD_BREADCRUMB: BreadcrumbModel[] = [
	{ label: 'Dashboard', icon: 'home', url: '/dashboard' },
	{ label: 'Example List', icon: 'lists', url: '/secure/example' },
	{ label: 'Example Add', icon: 'add' },
];
