import { Directive, ElementRef, HostListener, input, OnDestroy, OnInit, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
	selector: '[appOnlyNumber]',
	standalone: true,
})
export class OnlyNumberDirective implements OnInit, OnDestroy {
	private debounceTimer: any;
	private subscription!: Subscription[];
	private value!: number;

	isNumberType = input<boolean>();
	allowComma = input<boolean>();
	allowColon = input<boolean>();
	limitColon = input<number>(0);
	allowOperator = input<boolean>();
	limitComma = input<number>(0);
	minNumber = input<number>();
	maxNumber = input<number>();

	@HostListener('keydown', ['$event'])
	onKeyDown(event: KeyboardEvent) {
		if (!this.isNumberType()) return;

		const input = event.key;
		const numberRegex = /[0-9]+/g;
		const operatorKeys = ['+', '-', '*', '/', '(', ')'];
		const specialKeys = [
			'ArrowLeft',
			'ArrowRight',
			'Backspace',
			'Del',
			'Delete',
			'Enter',
			'Escape',
			'End',
			'Home',
			'Tab',
		];
		const value = this.elementRef.nativeElement.value;

		/* Allow Select All, Copy, Paste, Cut */

		if (
			(event.keyCode === 65 && event.ctrlKey === true) || // Ctrl + A
			(event.keyCode === 67 && event.ctrlKey === true) || // Ctrl + C
			(event.keyCode === 86 && event.ctrlKey === true) || // Ctrl + V
			(event.keyCode === 88 && event.ctrlKey === true) || // Ctrl + X
			(event.keyCode === 65 && event.metaKey === true) || // Cmd + A
			(event.keyCode === 67 && event.metaKey === true) || // Cmd + C
			(event.keyCode === 86 && event.metaKey === true) || // Cmd + V
			(event.keyCode === 88 && event.metaKey === true) // Cmd + X
		) {
			return;
		}

		/* Allow Special Key */

		if (specialKeys.indexOf(event.key) !== -1) {
			return;
		}

		/* Allow Comma */

		if (this.allowComma()) {
			if (this.limitComma !== undefined && numberRegex.test(input)) {
				const current = this.elementRef.nativeElement.value;
				const position = this.elementRef.nativeElement.selectionStart;
				const next = [
					current.slice(0, position),
					event.key === 'Decimal' ? '.' : event.key,
					current.slice(position),
				].join('');
				const afterComma = next.split('.')[1];

				if (afterComma && afterComma.length > this.limitComma()) {
					event.preventDefault();
				}

				return;
			}

			if (event.key === '.' && !/\./g.test(value)) {
				return;
			}
		}

		/* Allow Colon */
		if (this.allowColon()) {
			if (this.limitColon !== undefined && numberRegex.test(input)) {
				const current = this.elementRef.nativeElement.value;
				const position = this.elementRef.nativeElement.selectionStart;
				const next = [
					current.slice(0, position),
					event.key === 'Decimal' ? ':' : event.key,
					current.slice(position),
				].join('');
				const afterColon = next.split(':')[1];

				if (afterColon && afterColon.length > this.limitColon()) {
					event.preventDefault();
				}

				return;
			}

			if (event.key === ':' && !/\./g.test(value)) {
				return;
			}
		}

		/* Allow Operator */
		if (this.allowOperator()) {
			if (operatorKeys.indexOf(event.key) !== -1) {
				return;
			}
		}

		/* Allow Number */
		if (numberRegex.test(input)) {
			return;
		}

		event.preventDefault();
	}

	@HostListener('paste', ['$event'])
	onPaste(event: ClipboardEvent) {
		event.preventDefault();

		const pastedInput: string =
			event?.clipboardData?.getData('text/plain').replace(/\D/g, '') ?? '';

		document.execCommand('insertText', false, pastedInput);
	}

	constructor(
		@Self()
		private ngControl: NgControl,
		private elementRef: ElementRef,
	) {}

	ngOnInit() {
		this.subscription = [];

		if (!this.isNumberType()) return;

		this.setValueChanges();
	}

	private setValueChanges() {
		const subs = this.ngControl.valueChanges!.subscribe(value => {
			this.value = Number(value);

			clearTimeout(this.debounceTimer);

			this.debounceTimer = setTimeout(() => {
				this.checkLimit();
			}, 100);
		});

		this.subscription.push(subs);
	}

	private checkLimit() {
		if (this.minNumber() !== undefined && this.value < Number(this.minNumber())) {
			this.ngControl.control?.setValue(Number(this.minNumber()));
		}

		if (this.maxNumber() !== undefined && this.value > Number(this.maxNumber())) {
			this.ngControl.control?.setValue(Number(this.maxNumber()));
		}
	}

	ngOnDestroy() {
		this.subscription.forEach(each => each.unsubscribe());
	}
}
