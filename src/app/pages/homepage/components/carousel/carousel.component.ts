import { AfterViewInit, Component } from '@angular/core';
import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import ClassNames from 'embla-carousel-class-names';
import { addPrevNextBtnsClickHandlers } from '../../../../core/embla';

@Component({
	selector: 'app-carousel',
	imports: [],
	templateUrl: './carousel.component.html',
	styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements AfterViewInit {
	ngAfterViewInit(): void {
		const emblaNode = <HTMLElement>document.querySelector('.embla');
		const viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport');
		const prevBtn = <HTMLElement>emblaNode.querySelector('.embla__button--prev');
		const nextBtn = <HTMLElement>emblaNode.querySelector('.embla__button--next');

		const emblaApi = EmblaCarousel(
			viewportNode,
			{
				loop: true,
			},
			[Autoplay({ playOnInit: true, delay: 5000 }), ClassNames()],
		);

		const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
			emblaApi,
			prevBtn,
			nextBtn,
		);

		emblaApi.on('destroy', removePrevNextBtnsClickHandlers);
	}
}
