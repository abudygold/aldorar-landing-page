import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
	selector: 'app-header',
	imports: [MatToolbarModule, MatIconModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	sidenavToggle = output<void>();
}
