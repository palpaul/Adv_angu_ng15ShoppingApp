import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  //default code 
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  //modified code
  transform(value: string):string {

    //in java script we dont have reverse method by defautl but in array we have so frist we spling then useing reverse()
    return value.split("").reverse().join("");
  }

}
