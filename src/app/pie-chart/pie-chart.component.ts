import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent  {
/*  public items : {name: string, percentage: number}[] = []
  public slices;
  constructor() { 
    this.slices = this.items.reduce( (a : {start:number, end:number, color:string, name:string, percentage: string}[], b : {name:string, percentage: number}) => {
      return [...a, {
        ...b,
        start: a.length ? a[a.length-1].end : 0,
        end: Math.PI * b.percentage,
        color: (a.length % 2 === 0) ? "red" : "blue",
      }]
    },[]).map(x=> {return {...x, arc: this.describeArc(this.circle.x, this.circle.y, this.circle.radius, x.start, x.end)))
  }

  describeArc(x : number, y : number, radius : number, startAngle : number, endAngle: number){
    const start = this.polarToCartesian(x, y, radius, endAngle);////LETZTES ARGUMENT MÜSSTE ANDRESRUM SEIN; ODER????
    const end = this.polarToCartesian(x, y, radius, startAngle);////LETZTES ARGUMENT MÜSSTE ANDRESRUM SEIN; ODER????
    var arcSweep = endAngle - startAngle <= Math.PI ? "0" : "1";
    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
        "L", x,y,
        "L", start.x, start.y
    ].join(' ');
    return d;       
}
  ngOnInit(): void {
  }

  polarToCartesian(centerX : number, centerY : number, radius : number, angleInRadians : number) {
    //const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
    return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}
*/
}
