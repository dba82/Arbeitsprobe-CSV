import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnChanges {
  @Input() public data: any;
  public slices: any = {};
  public center = { x: 100, y: 100 };
  public radius = 100;
  public lastItem : any = null;
  public items : any;
  
  tracker(item: any) {
    return item.name;
  }

  generateSlices() {
    return this.data.percentages
      .reduce((result: any,
        item: { name: string, percentage: number },
        index: number) => {
          console.log(item)
        const startAngle = (index > 0) ? result[this.data.percentages[index - 1].name]?.endAngle : 0;
        const endAngle = startAngle! + Math.PI * 2 * item.percentage
        result[item.name] = {
          endAngle,
          path: `M ${this.center.x} ${this.center.y}
          L  ${this.center.x + (this.radius * Math.cos(startAngle!))} ${this.center.y + (this.radius * Math.sin(startAngle!))} \
          A ${this.radius} ${this.radius} 0 ${endAngle - startAngle! <= Math.PI ? "0" : "1"} 1 ${this.center.x + (this.radius * Math.cos(endAngle))} ${this.center.y + (this.radius * Math.sin(endAngle))} \
          L ${this.center.x} ${this.center.y}`
        };
        return result;
      }, {});
  }

  ngOnChanges() {
    if (!this.data) return;
    this.slices = this.generateSlices();
    this.items = this.data.percentages;
    this.lastItem = null;
  }
}