import { Component, Input, inject } from '@angular/core';
import { Piloto } from '../../interface/pilotos.interface';
import { RouterLink } from '@angular/router';
import { PilotoServiceService } from '../../service/piloto-service.service';

@Component({
  selector: 'app-piloto-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './piloto-card.component.html',
  styleUrl: './piloto-card.component.css'
})
export class PilotoCardComponent {
  @Input()
  piloto!: Piloto

}
