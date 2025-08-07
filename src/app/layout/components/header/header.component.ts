import { Component, inject, input, model, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent, ButtonModel } from '@devkitify/angular-ui-kit';
import { FREE_CONSULTATION_BUTTON } from '../../../shared/const/button/homepage';
import { HEADER_MENUS, INavigation } from '../../../core/navigation';

@Component({
	selector: 'app-header',
	imports: [ButtonComponent, RouterLink],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	#router = inject(Router);

	isOpenMenu = signal<boolean>(false);
	navigation = model<INavigation[]>(HEADER_MENUS);
	formConfig = {
		freeConsultationButton: signal<ButtonModel>(FREE_CONSULTATION_BUTTON),
	};

	isScrolled = input<boolean>(false);

	onClickMenu(_menu: INavigation): void {
		if (!_menu.link) return;

		_menu.isOpened = !_menu.isOpened;

		this.navigation.update(menus => {
			menus.map((menu: INavigation) => ({ ...menu, isOpened: _menu?.isOpened || false }));
			return [...menus];
		});

		this.#router.navigate([_menu.link], {
			queryParams: _menu.params || {},
		});
	}
}
