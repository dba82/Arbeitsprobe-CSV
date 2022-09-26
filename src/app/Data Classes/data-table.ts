/**
 * !! Wichtig, die Spaltennamen müssen eindeutig sein !!
 * 
 * Die DataTable-Klasse repräsentiert Tabellarische Daten, in 
 * Form eines Objekts, dessen Schlüssel die Spaltennamen sind.
 * (Das naheliegende Format als 2-dimensionales Array von Strings 
 * führte leider zu Problemen beim Databinding in der Tabelle).
 * 
 * - Zeilen können nach einer gewählten Spalte hinzugefügt werden.
 * - Spalten können nach ihrem Namen ausgewählt werden.

 */
export class DataTable {
	/**
	 *  Der String wird "am Stück" abgearbeitet was bei sehr sehr vielen
	 *  Datensätzen zu langen Verarbeitungspausen führen kann.
	 */
	static fromCSVString(str: string) : DataTable{
		let betweenQuotes: boolean = false;
		let currentString: string = '';
		let currentRow: string[] = [];
		const table: any[] = [];

		for (let i = 0; i < str.length; i++) {
			const char = str[i];
			switch (char) {
				case '"': {
					if (betweenQuotes && str[i + 1] === '"') {
						currentString += char;
						i += 1;
						break;
					}
					betweenQuotes = !betweenQuotes;
					break;
				}
				case ';': {
					if (betweenQuotes) {
						currentString += char;
						continue;
					}
					currentRow.push(currentString);
					currentString = '';
					break;
				}
				case '\n': {
					if (betweenQuotes) {
						currentString += char;
						break;
					}
					currentRow.push(currentString);
					currentString = '';
					if (table[0]) {
						if (currentRow.length != table[0].length){
							throw new Error(`Row ${(table.length + 1)} contains \
							 ${currentRow.length} Items, should have ${table[0].length}`)
						}
						table.push(
							table[0].reduce((a: any, b: string, i: number) => {
								a[b] = currentRow[i];
								return a;
							}, {}))
					} else {
						table.push(currentRow);
					}
					currentRow = [];
					break;
				}
				default: {
					currentString += char;
				}
			}
		}
		return new DataTable(table.slice(1), table[0]);
	}

	constructor(public rows: any[], public columnNames: string[]){ }

	get length() : number {
		return this.rows.length;
	}

	addNewRowAfter(row: any) {
		const index: number = this.rows.indexOf(row);
		const newRow: any = this.columnNames.reduce(
			(row: any, columnName: string) : any => {
				row[columnName] = "";
				return row;
		}, {})
		this.rows.splice(index + 1, 0, newRow);
	}

	getColumnByName(columnName: string) : string[] {
		return this.rows.map((row: any) : string => row[columnName]);
	}

	toCSVString() : string {
		function toFieldString(str : string): string {
			str = str.replace(/"/g, '""')
			if (/\s/.test(str)) str = '"' + str + '"'
			return str;
		}

		return this.columnNames.map(toFieldString).join(";") + '\n' + 
			this.rows
				.map((row: any) : string => this.columnNames
					.map((columnName: string) : string => toFieldString(row[columnName])).join(";"))
				.join("\n");
	}
}
