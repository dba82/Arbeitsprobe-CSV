export class DataTable {
	static fromCSVString(str: string) : DataTable{
		let betweenQuotes: boolean = false;
		let currentString: string = '';
		let currentRow: string[] = [];
		let table: any[] = [];

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
		return this.rows.map((row: any) => row[columnName]);
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
