import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      counter works!
    </p>
  `,
  styles: [
  ]
})
export class CounterComponent {
  //define var
  count: number = 10
  
  // create one method
  increment(){
    this.count++
    return this.count
  }

}
