import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Provincia } from '../../../models/provincia/provincia.model';
import { ProvinciaService } from '../../../services/provincia/provincia.service';

@Component({
  selector: 'app-provincia',
  standalone: true,
  imports: [],
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css'] // Corrigido para 'styleUrls' (array)
})
export class ProvinciaComponent {

  provincia$!: Observable<Provincia[]>;

  constructor(private provinceService: ProvinciaService) {}

  ngOnInit(): void {
    this.getAllProvinces(); // Nome atualizado para melhor clareza
  }

  getAllProvinces() {
    this.provincia$ = this.provinceService.getAllProvince();
  }

}
