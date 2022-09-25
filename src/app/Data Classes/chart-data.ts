export class ChartData {
	constructor(public column: string[]) { }
	private _lastValue : string[] = [];
	private _counts: any;
	private _percentages: any;


	get counts() : any{
		if (this._lastValue !== this.column) {
			this._counts = this.column
				.reduce((counts: any, columnContent: string) : any => {
					counts[columnContent] = {
						count: counts[columnContent] ? counts[columnContent].count + 1 : 1,
						name: columnContent
					}
					return counts;
				}, {})
				this._lastValue = this.column;
		}
		return this._counts;
	}

	get percentages() : any{
		if (this._lastValue !== this.column) {
			this._percentages = Object.keys(this.counts)
				.map((columnContent : string) => {
					return {
						...this.counts[columnContent],
						percentage: this.counts[columnContent].count / this.column.length
					}
				}).sort((a, b) => a.percentage < b.percentage ? 1 : -1)
				this._lastValue = this.column;
		}
		return this._percentages;
	}
}
