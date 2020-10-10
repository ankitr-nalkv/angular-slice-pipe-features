import { Component, VERSION } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  data = of([1,2,3,4,5]);
  controlData = of ([
    {
      label: 'sliderprogress',
      value: 50
    },
    {
      label: 'spinnerprogress',
      value: 40
    }
  ])
  chartData = of ([
    {
      name: 'clothes',
      value: 100
    },
    {
      name: 'groceries',
      value: 500
    },
    {
      name: 'food ordering',
      value: 200
    }
  ])
}
