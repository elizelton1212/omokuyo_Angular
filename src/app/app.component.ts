import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { EsqueletoComponent } from './esqueleto/esqueleto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EsqueletoComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'omokuyo';
}
