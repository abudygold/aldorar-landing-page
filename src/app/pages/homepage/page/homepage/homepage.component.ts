import { Component } from '@angular/core';
import { AboutUsComponent } from '../../components/about-us';
import { CarouselComponent } from '../../components/carousel';
import { HeadingTextComponent } from '../../components/heading-text';
import { PackageInformationComponent } from '../../components/package-information';
import { ServicePackageComponent } from '../../components/service-package';
import { TestimoniComponent } from '../../components/testimoni';
import { WhyUsComponent } from '../../components/why-us';

@Component({
	selector: 'app-homepage',
	imports: [
		HeadingTextComponent,
		CarouselComponent,
		ServicePackageComponent,
		WhyUsComponent,
		TestimoniComponent,
		PackageInformationComponent,
		AboutUsComponent,
	],
	templateUrl: './homepage.component.html',
	styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
