import { ButtonModel } from '@devkitify/angular-ui-kit';

export interface IServicePackageButton {
	umrohButton: ButtonModel;
	hajjButton: ButtonModel;
}

const UMROH_BUTTON = (label: string): ButtonModel =>
	new ButtonModel('flat', label, 'primary', false, '!tw-h-10');
const HAJJ_BUTTON = (label: string): ButtonModel =>
	new ButtonModel('stroked', label, 'primary', false, '!tw-h-10');

export const SERVICE_PACKAGE_CONST = (
	umrohLabel: string = 'Umroh',
	hajjLabel: string = 'Haji',
): IServicePackageButton => ({
	umrohButton: UMROH_BUTTON(umrohLabel),
	hajjButton: HAJJ_BUTTON(hajjLabel),
});

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

export const CONTACT_US_BUTTON: ButtonModel = new ButtonModel(
	'flat',
	'Hubungi Kami',
	'primary',
	false,
	'!tw-h-10',
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
	'!tw-h-10 !tw-rounded-none',
);

export const READ_MORE_BUTTON: ButtonModel = new ButtonModel(
	'flat',
	'Selengkapnya',
	'primary',
	false,
	'!tw-h-10',
);

export const READ_MORE_ARTICLE_BUTTON: ButtonModel = new ButtonModel(
	'stroked',
	'Baca Selengkapnya',
	'primary',
	false,
	'!tw-h-10',
);
