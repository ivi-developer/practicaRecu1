import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Piloto } from '../interface/pilotos.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PilotoServiceService {

  urlBase = environment.urlJson

  http = inject(HttpClient)
  get(): Observable<Piloto[]> {
    return this.http.get<Piloto[]>(this.urlBase)
  }
  post(piloto: Piloto): Observable<Piloto> {
    return this.http.post<Piloto>(this.urlBase, piloto)
  }
  getById(id: string | null | undefined): Observable<Piloto> {
    return this.http.get<Piloto>(`${this.urlBase}/${id}`)
  }
  delete(id: string | null | undefined): Observable<null> {
    return this.http.delete<null>(`${this.urlBase}/${id}`)
  }
  update(id: string | null, piloto: Piloto): Observable<Piloto> {
    return this.http.put<Piloto>(`${this.urlBase}/${id}`, piloto)
  }
}
