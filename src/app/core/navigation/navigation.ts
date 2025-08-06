export interface INavigation {
	label: string;
	isActive: boolean;
	isOpened?: boolean;
	isParent?: boolean;
	icon?: string;
	link?: string;
	params?: object;
	paddingLeft?: string;
	subMenu?: INavigation[];
}

export const HEADER_MENUS: INavigation[] = [
	{
		isActive: false,
		label: 'Beranda',
		link: '/homepage',
	},
	{
		isActive: false,
		label: 'Paket Umroh',
		link: '/package-list',
		params: {
			type: 'umroh',
		},
	},
	{
		isActive: false,
		label: 'Paket Haji',
		link: '/package-list',
		params: {
			type: 'haji',
		},
	},
	{
		isActive: false,
		label: 'Artikel',
		link: '/package-list',
		params: {
			type: 'haji',
		},
	},
	{
		isActive: false,
		label: 'Profil',
		link: '/package-list',
		params: {
			type: 'haji',
		},
	},
];
