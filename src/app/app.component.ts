import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NavComponent } from './layout/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    RouterModule,
    NavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-theme-tester';
}
