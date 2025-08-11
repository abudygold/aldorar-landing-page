import { Component, signal } from '@angular/core';
import { ButtonComponent, ButtonModel } from '@devkitify/angular-ui-kit';
import { ABOUT_US_BUTTON } from '../../../../shared/form-builder/button/homepage';

@Component({
	selector: 'app-about-us',
	imports: [ButtonComponent],
	templateUrl: './about-us.component.html',
	styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
	formConfig = {
		aboutUsButton: signal<ButtonModel>(ABOUT_US_BUTTON),
	};
}
