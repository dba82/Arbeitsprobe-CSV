/**
 * Die ChartData-Klasse repräsentiert Daten über eine Tabellenspalte:
 * Für jede Eintragsart (zwei Einträge sind von der gleichen Art, wenn
 * ihr Text der gleiche ist) wird gezählt wie oft sie vorkommt und
 * welchem Prozentsatz das entspricht. Außerdem gibt es ein Feld dafür,
 * ob diese Eintragsart ausgewählt wurde (zum Beispiel über das Klicken
 * auf ein Tortenstück im Diagramm oder eine Zeile in einer Tabelle).
 */


export class ChartData {
	constructor(public column: string[]) { }
	private _lastValue : string = '';
	private _counts: any;
	private _percentages: any;


	get counts() : any{
		if (this._lastValue !== this.column.toString()) {
			this._counts = this.column
				.reduce((counts: any, columnContent: string) : any => {
					counts[columnContent] = {
						count: counts[columnContent] ? counts[columnContent].count + 1 : 1,
						name: columnContent,
						selected: false
					}
					return counts;
				}, {})
				this._lastValue = this.column.toString();
		}
		return this._counts;
	}

	get percentages() : any{
		if (this._lastValue !== this.column.toString()) {
			this._percentages = Object.keys(this.counts)
				.map((columnContent : string) => {
					return {
						...this.counts[columnContent],
						percentage: this.counts[columnContent].count / this.column.length
					}
				}).sort((a, b) => a.percentage < b.percentage ? 1 : -1)
				this._lastValue = this.column.toString();
		}
		return this._percentages;
	}
}
