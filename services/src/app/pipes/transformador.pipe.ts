import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformador',
})
export class TransformPipe implements PipeTransform {
  transform(value: unknown, name: any, secondary: any): unknown {
    return value + '-' + name + '-' + secondary;
  }
}
