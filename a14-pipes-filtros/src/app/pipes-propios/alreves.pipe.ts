import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alreves'
})
export class AlrevesPipe implements PipeTransform {

  transform(value: any) {
    let cambiado = value.split('').reverse().join('');
    return cambiado;
  }

}
