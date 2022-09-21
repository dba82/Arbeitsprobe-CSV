import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor() { }

  parseCSV(str : string, fieldNames : string[]) : any[]{
    let betweenQuotes : boolean = false;
    let escapedQuote : boolean  = false;
    let currentString : string = '';
    let currentFieldIndex  : number = 0;
    let currentRow : any = {};
    let table : any[] = [];

    function setField() : void{
      currentRow[fieldNames[currentFieldIndex]] = currentString;
      currentFieldIndex = (currentFieldIndex + 1) % fieldNames.length;
      currentString = '';
    }

    for (let i = 0; i < str.length; i++){
      const char = str[i];
      switch (char){
        case '\\' : {
          escapedQuote = str[i+1] === '"';
          break; 
        }
        case '"' : {
          betweenQuotes = escapedQuote ? betweenQuotes : !betweenQuotes;
          currentString += escapedQuote ? char : '';
          escapedQuote = false;
          break;
        }
        case ';' : {
          if (betweenQuotes) {
            currentString += char;
            continue;
          }              
          setField();
          break;
        }
        case '\n' : {
          if (betweenQuotes) {
            currentString += char;
            break;
          }
          setField();
          table.push(currentRow);
          currentRow = {};
          break;
        }
        default : {
          currentString += char;
        }
      }
    }
    return table;
  }

  toCSVString(table : any[], fieldNames : string[]):string{
    function toFieldString(str : string):string{
      str = str.replace(/"/g, '\\"')
      if (/\s/.test(str)) str = '"' + str + '"'
      return str;
    }

    return fieldNames.map(toFieldString).join(';') + '\n' +
           table.map((row : any) => fieldNames.map((fieldname : string)=> toFieldString(row[fieldname]))
                                              .join(";"))
                .join("\n")
  }
}
