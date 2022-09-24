export class Chart {
	constructor(list : {name : string, percentage: number}[]){
		list.map( (item : {name : string, percentage: number}) => {
			return { ...item, angle: Math.PI*2*item.percentage};
		})
	}
}
