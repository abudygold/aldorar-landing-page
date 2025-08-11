import { ButtonModel } from '@devkitify/angular-ui-kit';

/* Heading */
export interface IHeadingButton {
	contactUsButton: ButtonModel;
	packageButton: ButtonModel;
}

const CONTACT_US_BUTTON = (label: string): ButtonModel =>
	new ButtonModel(
		'flat',
		label,
		'primary',
		false,
		'!tw-h-10',
		'',
		'',
		'start',
		'./icons/socmed/whatsapp-white.svg',
	);
const PACKAGE_BUTTON = (label: string): ButtonModel =>
	new ButtonModel('stroked', label, 'primary', false, '!tw-h-10', '', 'list');

export const HEADING_BUTTON_CONST = (
	contactUsLabel: string = 'Hubungi Kami',
	packageLabel: string = 'Lihat Paket',
): IHeadingButton => ({
	contactUsButton: CONTACT_US_BUTTON(contactUsLabel),
	packageButton: PACKAGE_BUTTON(packageLabel),
});

/* Service Package */
export interface IServicePackageButton {
	umrohButton: ButtonModel;
	hajjButton: ButtonModel;
}

const UMROH_BUTTON = (label: string): ButtonModel =>
	new ButtonModel('flat', label, 'primary', false, '!tw-h-10');
const HAJJ_BUTTON = (label: string): ButtonModel =>
	new ButtonModel('stroked', label, 'primary', false, '!tw-h-10');

export const SERVICE_PACKAGE_BUTTON_CONST = (
	umrohLabel: string = 'Umroh',
	hajjLabel: string = 'Haji',
): IServicePackageButton => ({
	umrohButton: UMROH_BUTTON(umrohLabel),
	hajjButton: HAJJ_BUTTON(hajjLabel),
});

/* Article */
export interface IArticleButton {
	readMoreButton: ButtonModel;
	seeMoreButton: ButtonModel;
}

const READ_MORE_ARTICLE = (label: string): ButtonModel =>
	new ButtonModel('basic', label, 'link', false, '!tw-h-10 !tw-p-0', '', 'arrow_forward', 'end');
const SEE_MORE_ARTICLE = (label: string): ButtonModel =>
	new ButtonModel('flat', label, 'primary', false, '!tw-h-10', '', 'arrow_forward', 'end');

export const ARTICLE_BUTTON_CONST = (
	readMoreLabel: string = 'Baca Selengkapnya',
	seeMoreLabel: string = 'Artikel Lainnya',
): IArticleButton => ({
	readMoreButton: READ_MORE_ARTICLE(readMoreLabel),
	seeMoreButton: SEE_MORE_ARTICLE(seeMoreLabel),
});

/* Single Button */
export const FREE_CONSULTATION_BUTTON: ButtonModel = new ButtonModel(
	'flat',
	'Konsultasi Gratis',
	'primary',
	false,
	'tw-w-full !tw-h-10',
	'',
	'',
	'start',
	'./icons/socmed/whatsapp-white.svg',
);

export const ABOUT_US_BUTTON: ButtonModel = new ButtonModel(
	'flat',
	'Tentang Kami',
	'primary',
	false,
	'!tw-h-10 !tw-bg-white !tw-text-[#101828]',
);

export const READ_MORE_BUTTON: ButtonModel = new ButtonModel(
	'flat',
	'Selengkapnya',
	'primary',
	false,
	'!tw-h-10',
	'',
	'arrow_forward',
	'end',
);
