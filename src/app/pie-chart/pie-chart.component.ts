import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent  implements OnInit{
  @Input() public items : any[] = [
    {name: "A", percentage: 0.20, color: "green"},
    {name: "B", percentage: 0.65, color: "red"},
    {name: "C", percentage: 0.05, color: "blue"},
    {name: "D", percentage: 0.1, color: "yellow"},]
  public slices : any[] = [];
  public center = {x: 100, y: 100};
  public radius = 100;

  generateSlices() { 
    this.slices = this.items
        .reduce( (result : any[], item : {name:string, percentage: number}) => {
          const startAngle = result.length ? result[result.length-1].endAngle : 0;
          const endAngle = startAngle + Math.PI * 2 * item.percentage
          return [
            ...result, 
            {
              ...item,
              endAngle,
              path: `M ${this.center.x + (this.radius * Math.cos(startAngle))} ${this.center.y + (this.radius * Math.sin(startAngle))} \
                     A ${this.radius} ${this.radius} 0 ${endAngle - startAngle <= Math.PI ? "0" : "1"} 1 ${this.center.x + (this.radius * Math.cos(endAngle))} ${this.center.y + (this.radius * Math.sin(endAngle))} \
                     L ${this.center.x} ${this.center.y} \
                     L ${this.center.x + (this.radius * Math.cos(startAngle))} ${this.center.y + (this.radius * Math.sin(startAngle))}`
        }
      ]
    },[]);
  }
  
  ngOnInit(){
    this.generateSlices();
  }
}