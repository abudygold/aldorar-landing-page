import { Component, signal } from '@angular/core';
import { ButtonComponent, ButtonModel } from '@devkitify/angular-ui-kit';
import { READ_MORE_ARTICLE_BUTTON } from '../../../../shared/const/button/homepage';

@Component({
	selector: 'app-package-information',
	imports: [ButtonComponent],
	templateUrl: './package-information.component.html',
	styleUrl: './package-information.component.scss',
})
export class PackageInformationComponent {
	formConfig = {
		readMoreButton: signal<ButtonModel>(READ_MORE_ARTICLE_BUTTON),
	};
}
