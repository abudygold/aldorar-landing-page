import { Component } from '@angular/core';
import { IWhyUs, WHY_US_LIST } from '../../../../shared/const';

@Component({
	selector: 'app-why-us',
	imports: [],
	templateUrl: './why-us.component.html',
	styleUrl: './why-us.component.scss',
})
export class WhyUsComponent {
	whyUs: IWhyUs[] = WHY_US_LIST;
}
