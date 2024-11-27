import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PilotoCardComponent } from '../piloto-card/piloto-card.component';
import { Piloto } from '../../interface/pilotos.interface';
import { PilotoServiceService } from '../../service/piloto-service.service';

@Component({
  selector: 'app-piloto-list',
  standalone: true,
  imports: [PilotoCardComponent],
  templateUrl: './piloto-list.component.html',
  styleUrl: './piloto-list.component.css'
})
export class PilotoListComponent implements OnInit {
  ngOnInit(): void {
    this.service.get().subscribe(
      {
        next: (pilotos) => this.pilotos = pilotos
        ,
        error: (e: Error) => console.log(e.message)
      }
    )
  }
  service = inject(PilotoServiceService)
  pilotos: Piloto[] = []
  agregarPiloto(piloto: Piloto) {
    this.pilotos.push(piloto)
  }

  borrarPiloto(id: string | null | undefined) {
    this.service.delete(id).subscribe(
      {
        next: (value: null) => console.log("Piloto eliminado")
        ,
        error: (e: Error) => e.message
      }
    )
  }
}
