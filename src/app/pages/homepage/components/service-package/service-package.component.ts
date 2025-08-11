import { Component, signal } from '@angular/core';
import { ButtonComponent, ButtonModel } from '@devkitify/angular-ui-kit';
import {
	IServicePackageButton,
	READ_MORE_BUTTON,
	SERVICE_PACKAGE_BUTTON_CONST,
} from '../../../../shared/form-builder/button/homepage';

@Component({
	selector: 'app-service-package',
	imports: [ButtonComponent],
	templateUrl: './service-package.component.html',
	styleUrl: './service-package.component.scss',
})
export class ServicePackageComponent {
	formConfig = {
		servicePackageButton: signal<IServicePackageButton>(SERVICE_PACKAGE_BUTTON_CONST()),
		readMoreButton: signal<ButtonModel>(READ_MORE_BUTTON),
	};

	onPackageChange(servicePackage: 'umroh' | 'hajj'): void {
		if (!servicePackage) return;

		this.formConfig.servicePackageButton.update((buttons: IServicePackageButton) => {
			buttons['umrohButton'].variant = servicePackage === 'umroh' ? 'flat' : 'stroked';
			buttons['hajjButton'].variant = servicePackage === 'hajj' ? 'flat' : 'stroked';
			return buttons;
		});
	}
}
