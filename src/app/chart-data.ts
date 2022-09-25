export class ChartData {
	constructor(public column: string[]) { }
	private _lastValue : string[] = [];
	private _counts: any;
	private _percentages: any;


	get counts() {
		if (this._lastValue !== this.column) {
			this._counts = this.column
				.reduce((a: any, b: string) => {
					a[b] = {
						count: a[b] ? a[b].count + 1 : 1,
						name: b
					}
					return a;
				}, {})
				this._lastValue = this.column;
		}
		return this._counts;
	}

	get percentages() {
		if (this._lastValue !== this.column) {
			this._percentages = Object.keys(this.counts)
				.map((key: string) => {
					return {
						...this.counts[key],
						percentage: this.counts[key].count / this.column.length
					}
				}).sort((a, b) => a.percentage < b.percentage ? 1 : -1)
				this._lastValue = this.column;
		}
		return this._percentages;
	}
}
