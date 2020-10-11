import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular ' + VERSION.major;
  data = of(['A', 'B', 'C', 'D', 'E']);
  firstEle: string;
  private subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(this.data.subscribe(ele => {
      this.firstEle = ele[0];
    }));
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }




  controlData = of([
    {
      label: 'sliderprogress',
      value: 50
    },
    {
      label: 'spinnerprogress',
      value: 40
    }
  ])
  chartData = of([
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
