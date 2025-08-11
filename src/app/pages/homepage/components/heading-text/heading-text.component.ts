import { Component, signal } from '@angular/core';
import { ButtonComponent } from '@devkitify/angular-ui-kit';
import {
	HEADING_BUTTON_CONST,
	IHeadingButton,
} from '../../../../shared/form-builder/button/homepage';

@Component({
	selector: 'app-heading-text',
	imports: [ButtonComponent],
	templateUrl: './heading-text.component.html',
	styleUrl: './heading-text.component.scss',
})
export class HeadingTextComponent {
	formConfig = {
		headingButton: signal<IHeadingButton>(HEADING_BUTTON_CONST()),
	};
}
