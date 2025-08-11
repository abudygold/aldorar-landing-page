import { BreadcrumbModel } from '@devkitify/angular-ui-kit';

export const USER_LIST_BREADCRUMB: BreadcrumbModel[] = [
	{ label: 'Dashboard', icon: 'home', url: '/dashboard' },
	{ label: 'Users', icon: 'groups' },
];

export const USER_ADD_BREADCRUMB: BreadcrumbModel[] = [
	{ label: 'Dashboard', icon: 'home', url: '/dashboard' },
	{ label: 'Users List', icon: 'lists', url: '/secure/users' },
	{ label: 'Users Add', icon: 'add' },
];
