import { Component, signal } from '@angular/core';
import { ButtonComponent, ButtonModel } from '@devkitify/angular-ui-kit';
import { CONTACT_US_BUTTON } from '../../../../shared/const/button/homepage';

@Component({
	selector: 'app-heading-text',
	imports: [ButtonComponent],
	templateUrl: './heading-text.component.html',
	styleUrl: './heading-text.component.scss',
})
export class HeadingTextComponent {
	formConfig = {
		contactUsButton: signal<ButtonModel>(CONTACT_US_BUTTON),
	};
}
