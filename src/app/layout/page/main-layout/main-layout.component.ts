import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../../components/header';
import { FooterComponent } from '../../components/footer';
import { SidebarComponent } from '../../components/sidebar';
import { HEADER_MENUS, INavigation } from '../../../core/navigation';

@Component({
	selector: 'app-main-layout',
	imports: [RouterOutlet, MatSidenavModule, HeaderComponent, FooterComponent, SidebarComponent],
	templateUrl: './main-layout.component.html',
	styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
	isScrolled = signal<boolean>(false);

	navigation: INavigation[] = HEADER_MENUS;

	@HostListener('window:scroll', [])
	onWindowScroll() {
		this.isScrolled.set(window.scrollY > 10);
	}
}
