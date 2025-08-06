import { Routes } from '@angular/router';

export const LAYOUT_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('../pages/homepage/page/homepage/homepage.component').then(m => m.HomepageComponent),
	},
];
