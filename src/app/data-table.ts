/*export class DataTable {
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
		console.log(newRow);
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

		return [this.columnNames, ...this.rows]
			.map((row: string[]) => row.map(toFieldString).join(";"))
			.join("\n")
	}
}

*/
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
					if (table[0]){
						table.push(table[0].reduce((a:any,b:string,i:number) => {
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

	constructor(public rows: any, public columnNames: string[]) { }

	get width() {
		return this.columnNames.length;
	}

	get length() {
		return this.rows.length;
	}

	addNewRowAfter(row: any) {
		const index: number = this.rows.indexOf(row);
		const newRow:any = this.columnNames.reduce((a:any,b:any) =>{
			a[b] = "";
			return a;
		}, {})
		this.rows.splice(index + 1, 0, newRow);
	}

	getColumnByName(columnName: string) {
		const index = this.columnNames.indexOf(columnName);
		return this.rows.map((row:any) => row[index]['content']);
	}

	toCSVString(): string {
		function toFieldString(str: string): string {
			str = str.replace(/"/g, '""')
			if (/\s/.test(str)) str = '"' + str + '"'
			return str;
		}

		return this.columnNames.map(toFieldString).join(";") + 
			   this.rows
			    	.map((row:any) => Object.keys(row)
									.map( (key:string) => toFieldString(row[key])).join(";"))
			.join("\n");
		}
	}
