import { AfterViewInit, Component } from '@angular/core';
import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

@Component({
	selector: 'app-partner',
	imports: [],
	templateUrl: './partner.component.html',
	styleUrl: './partner.component.scss',
})
export class PartnerComponent implements AfterViewInit {
	ngAfterViewInit(): void {
		const emblaNode = <HTMLElement>document.querySelector('.embla_partner');
		const viewportNode = <HTMLElement>emblaNode.querySelector('.embla_partner__viewport');

		EmblaCarousel(
			viewportNode,
			{
				loop: true,
			},
			[Autoplay({ playOnInit: true, delay: 5000 })],
		);
	}
}
