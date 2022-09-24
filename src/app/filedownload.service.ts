import { Injectable, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTable } from './data-table';

@Injectable({
  providedIn: 'root'
})
export class FiledownloadService {
  private renderer;
  private fileInput;
  public fileLoaded : Subject<string>= new Subject();

  constructor(rendererFactory: RendererFactory2) { 
    this.renderer = rendererFactory.createRenderer(null, null);
    this.fileInput = this.renderer.createElement('input');
    this.renderer.setAttribute(this.fileInput, 'type', 'file');
    this.fileInput.click();
    this.renderer.listen(this.fileInput, 'change', (event) => {
      let file = this.fileInput.files[0];
      (async () => {
        const fileContent = await file.text();
        this.fileLoaded.next(fileContent);
      })();
    })
  }


  downloadAsText(content : string, filename : string){
    const a = this.renderer.createElement('a');
    a.download = filename;
    a.href = URL.createObjectURL(new Blob([content]));
    a.click();
  }

  openFile(){
    this.fileInput.click();
  }
}
