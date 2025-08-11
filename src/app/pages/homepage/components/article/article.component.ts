import { Component, signal } from '@angular/core';
import { ButtonComponent } from '@devkitify/angular-ui-kit';
import {
	ARTICLE_BUTTON_CONST,
	IArticleButton,
} from '../../../../shared/form-builder/button/homepage';

@Component({
	selector: 'app-article',
	imports: [ButtonComponent],
	templateUrl: './article.component.html',
	styleUrl: './article.component.scss',
})
export class ArticleComponent {
	formConfig = {
		articleButton: signal<IArticleButton>(ARTICLE_BUTTON_CONST()),
	};
}
