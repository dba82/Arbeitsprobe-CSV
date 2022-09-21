import { Injectable, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiledownloadService {
  private renderer;
  constructor(rendererFactory: RendererFactory2) { 
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  downloadAsText(content : string, filename : string){
    const a = this.renderer.createElement('a');
    a.download = filename;
    a.href = URL.createObjectURL(new Blob([content]));
    a.click();
  }
}
