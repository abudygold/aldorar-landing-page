import { AfterViewInit, Component } from '@angular/core';
import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel';
import ClassNames from 'embla-carousel-class-names';
import Autoplay from 'embla-carousel-autoplay';
import { addPrevNextBtnsClickHandlers } from '../../../../core/embla';

@Component({
	selector: 'app-carousel',
	imports: [],
	templateUrl: './carousel.component.html',
	styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements AfterViewInit {
	emblaOptions: Partial<EmblaOptionsType> = {
		loop: true,
	};

	ngAfterViewInit(): void {
		const emblaNode = <HTMLElement>document.querySelector('.embla');
		const viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport');
		const prevBtn = <HTMLElement>emblaNode.querySelector('.embla__button--prev');
		const nextBtn = <HTMLElement>emblaNode.querySelector('.embla__button--next');

		const emblaApi = EmblaCarousel(viewportNode, this.emblaOptions, [
			Autoplay({ playOnInit: true, delay: 5000 }),
			ClassNames(),
		]);

		const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
			emblaApi,
			prevBtn,
			nextBtn,
		);

		emblaApi.on('destroy', removePrevNextBtnsClickHandlers);
	}
}
