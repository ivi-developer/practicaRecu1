import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Piloto } from '../../interface/pilotos.interface';
import { PilotoServiceService } from '../../service/piloto-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-piloto-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './piloto-form.component.html',
  styleUrl: './piloto-form.component.css'
})
export class PilotoFormComponent {

  fb = inject(FormBuilder)

  form = this.fb.nonNullable.group(
    {
      nombre: ["", [Validators.required]],
      escuderiaDebut: ["", [Validators.required]],
      escuderiaActual: [""],
      anioDebut: [0, [Validators.required, Validators.min(1950), Validators.max(2024)]],
      cantPremios: [0, [Validators.required, Validators.min(0)]],
      cantPodios: [0, [Validators.required, Validators.min(0)]],
      activo: [false, [Validators.required]]
    }
  )


  emitPiloto() {
    if (this.form.invalid) {
      console.log('a');
      console.log(this.form.invalid);
      console.log(this.form.getRawValue());
      return
    }
    console.log(this.form.getRawValue())

    const piloto = this.form.getRawValue()
    this.postPiloto(piloto)
  }

  service = inject(PilotoServiceService)
  postPiloto(piloto: Piloto) {
    this.service.post(piloto).subscribe(
      {
        next: (piloto: Piloto) => console.log(piloto.nombre, " agregado")
        ,
        error: (e: Error) => console.log(e.message)
      }
    )
  }

}
