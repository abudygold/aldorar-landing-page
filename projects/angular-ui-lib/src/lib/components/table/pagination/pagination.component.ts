import { Component, OnInit, input, output, model } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
	selector: 'lib-pagination',
	imports: [MatSelectModule, MatIconModule, MatDividerModule],
	templateUrl: './pagination.component.html',
	styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
	pageChange = output<{ pageIndex: number; pageSize: number }>();

	pageSizeOptions = [5, 10, 25, 50];

	totalItems = input.required<number>();
	pageSize = model<number>(10);
	pageIndex = model<number>(0);

	get totalPages(): number {
		return Math.ceil(this.totalItems() / this.pageSize());
	}

	get totalPagesArray(): number[] {
		return Array(this.totalPages)
			.fill(0)
			.map((_, i) => i);
	}

	get rangeStart(): number {
		return this.pageIndex() * this.pageSize() + 1;
	}

	get rangeEnd(): number {
		return Math.min((this.pageIndex() + 1) * this.pageSize(), this.totalItems());
	}

	ngOnInit(): void {
		this.emitChange();
	}

	onChangePageSize(): void {
		this.pageIndex.set(0);
		this.emitChange();
	}

	onPageChange(): void {
		this.emitChange();
	}

	nextPage(): void {
		if (this.pageIndex() < this.totalPages - 1) {
			this.pageIndex.set(this.pageIndex() + 1);
			this.emitChange();
		}
	}

	prevPage(): void {
		if (this.pageIndex() > 0) {
			this.pageIndex.set(this.pageIndex() - 1);
			this.emitChange();
		}
	}

	emitChange(): void {
		this.pageChange.emit({ pageIndex: this.pageIndex(), pageSize: this.pageSize() });
	}
}
