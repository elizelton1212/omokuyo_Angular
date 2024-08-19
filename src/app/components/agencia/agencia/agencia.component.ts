import { ProvinciaService } from './../../../services/provincia/provincia.service';
import { Component, NgModule } from '@angular/core';
import { AgenciaService } from '../../../services/agencia/agencia.service';
import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {FloatLabelModule} from 'primeng/floatlabel';
import { MatCard, MatCardContent } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { Provincia } from '../../../models/provincia/provincia.model';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-agencia',
  standalone: true,
  imports: [ReactiveFormsModule,
    InputTextModule,FloatLabelModule,
    FormsModule,
    MatCard,
     MatCardContent,
     MatSnackBarModule,
     CommonModule
    ],
  templateUrl: './agencia.component.html',
  styleUrl: './agencia.component.css'
})



export class AgenciaComponent {
  valorProvincia:string='Selecione a provincia';
  [x: string]: any;
  userForm: FormGroup ;
  provincia$!: Observable<Provincia[]>;



  getAllProvinces() {
    this.provincia$ = this.provinceService.getAllProvince();
  }

  onProvinciaSelected(provinciaModel: Provincia) {
    console.log('Provincia selecionada:', provinciaModel.nome);

    // Definir o nome da província para exibição no botão
    if (provinciaModel.nome) {
      this.valorProvincia = provinciaModel.nome;
    }

    // Atualizar o campo provinciaID no formulário com o id da província selecionada
    if (provinciaModel.id) {
      this.userForm.get('provinciaID')?.setValue(provinciaModel.id);
    }

    // Atualizar a detecção de mudanças se necessário
    this.cdRef.detectChanges();
  }




ngOnInit(): void {
  this.getAllProvinces();
  this.cdRef.detectChanges();

  if(this.provincia$){
    console.log(this.provincia$)
  }

}

constructor(private agencia:AgenciaService,private fb: FormBuilder,private snackBar: MatSnackBar, private provinceService:ProvinciaService,private cdRef: ChangeDetectorRef){
  this.userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    city:['', Validators.required],
    province:['', Validators.required],
    phone:['', Validators.required],
    nib:['', Validators.required],
    country:['', Validators.required],
    localization:['', Validators.required],
    provinciaID:['',Validators.required]
  });
}




  onSubmit() {

    console.log('fui chamado')
    if (this.userForm) {
      const agencia = this.userForm.value;
      this.agencia.saveAgence(agencia).then(() => {
        if(this.userForm){
          this.userForm.reset();
        this. showPopup();
        }

console.log('passei')
      });


    }else{
      console.log('não passei ')
    }
  }




  showPopup() {
    this.snackBar.open('Agência Cadastrada com sucesso', 'x', {
      duration: 8000, // duração em milissegundos (8 segundos)
      panelClass: ['custom-snackbar-blue'],
    });
  }
}
