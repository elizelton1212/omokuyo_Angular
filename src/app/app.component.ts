import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { EsqueletoComponent } from './esqueleto/esqueleto.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EsqueletoComponent,RouterLink,Dashboard1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'omokuyo';
}
