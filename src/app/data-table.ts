export class DataTable {
	static fromCSVString(str: string) {
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
					table.push(currentRow);
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

	constructor(public rows: string[][], public columnNames: string[]) { }

	get width() {
		return this.columnNames.length;
	}

	get length() {
		return this.rows.length;
	}
	
	addNewRowAfter(row: string[]) {
		const index: number = this.rows.indexOf(row);
		const newRow: string[] = Array.from({ length: this.width }, () => '');
		this.rows.splice(index + 1, 0, newRow);
	}

	getColumnByName(columnName: string) {
		const index = this.columnNames.indexOf(columnName);
		return this.rows.map(row => row[index]);
	}

	toCSVString(): string {
		function toFieldString(str: string): string {
			str = str.replace(/"/g, '""')
			if (/\s/.test(str)) str = '"' + str + '"'
			return str;
		}

		return this.rows
			.map((row: string[]) => row.map(toFieldString).join(";"))
			.join("\n")
	}
}