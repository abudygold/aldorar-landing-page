import { Routes } from '@angular/router';
import { LAYOUT_ROUTES } from './layout/layout.routes';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./layout/page/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
		children: [...LAYOUT_ROUTES],
	},
];
