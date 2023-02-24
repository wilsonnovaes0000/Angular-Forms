import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule, RouterModule, HeaderComponent],
  template: `
  <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'angular-forms';
}
