import { Component } from '@angular/core';
import { AboutUsComponent } from '../../components/about-us';
import { CarouselComponent } from '../../components/carousel';
import { HeadingTextComponent } from '../../components/heading-text';
import { ArticleComponent } from '../../components/article';
import { ServicePackageComponent } from '../../components/service-package';
import { TestimoniComponent } from '../../components/testimoni';
import { WhyUsComponent } from '../../components/why-us';
import { PartnerComponent } from '../../components/partner';

@Component({
	selector: 'app-homepage',
	imports: [
		HeadingTextComponent,
		CarouselComponent,
		PartnerComponent,
		ServicePackageComponent,
		WhyUsComponent,
		TestimoniComponent,
		ArticleComponent,
		AboutUsComponent,
	],
	templateUrl: './homepage.component.html',
	styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
