import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  getPrueba() {
    return "Dato de un servicio creado con CLI";
  }
}
