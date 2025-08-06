import { Component, input, output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonComponent, ButtonModel } from '@devkitify/angular-ui-kit';
import { FREE_CONSULTATION_BUTTON } from '../../../shared/const/button/homepage';
import { HEADER_MENUS, INavigation } from '../../../core/navigation';

@Component({
	selector: 'app-header',
	imports: [MatToolbarModule, MatIconModule, ButtonComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	sidenavToggle = output<void>();

	menus: INavigation[] = HEADER_MENUS;
	formConfig = {
		freeConsultationButton: signal<ButtonModel>(FREE_CONSULTATION_BUTTON),
	};

	isScrolled = input<boolean>(false);
}
