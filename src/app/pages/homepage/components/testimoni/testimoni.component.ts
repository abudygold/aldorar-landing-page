import { AfterViewInit, Component } from '@angular/core';
import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { addPrevNextBtnsClickHandlers } from '../../../../core/embla';

@Component({
	selector: 'app-testimoni',
	imports: [],
	templateUrl: './testimoni.component.html',
	styleUrl: './testimoni.component.scss',
})
export class TestimoniComponent implements AfterViewInit {
	ngAfterViewInit(): void {
		const emblaNode = <HTMLElement>document.querySelector('.embla_testimoni');
		const viewportNode = <HTMLElement>emblaNode.querySelector('.embla_testimoni__viewport');
		const prevBtn = <HTMLElement>emblaNode.querySelector('.embla_testimoni__button--prev');
		const nextBtn = <HTMLElement>emblaNode.querySelector('.embla_testimoni__button--next');

		const emblaApi = EmblaCarousel(
			viewportNode,
			{
				loop: true,
				align: 'start',
			},
			[Autoplay({ playOnInit: true, delay: 5000 })],
		);

		const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
			emblaApi,
			prevBtn,
			nextBtn,
		);

		emblaApi.on('destroy', removePrevNextBtnsClickHandlers);
	}
}
