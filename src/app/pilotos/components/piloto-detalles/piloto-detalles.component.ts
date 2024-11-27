import { Component, inject, OnInit } from '@angular/core';
import { PilotoServiceService } from '../../service/piloto-service.service';
import { Piloto } from '../../interface/pilotos.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-piloto-detalles',
  standalone: true,
  imports: [],
  templateUrl: './piloto-detalles.component.html',
  styleUrl: './piloto-detalles.component.css'
})
export class PilotoDetallesComponent implements OnInit {

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      {
        next: (param) => {
          this.id = param.get('id')
          this.getPiloto(this.id)
        },
        error: (e: Error) => console.log(e.message)

      }
    )
  }
  id: string | null | undefined
  activatedRoute = inject(ActivatedRoute)
  service = inject(PilotoServiceService)
  getPiloto(id: string | null | undefined) {
    this.service.getById(id).subscribe({
      next: (piloto: Piloto) => this.piloto = piloto
      ,
      error: (e: Error) => console.log(e.message)
    })
  }
  piloto: Piloto | null = null
}
