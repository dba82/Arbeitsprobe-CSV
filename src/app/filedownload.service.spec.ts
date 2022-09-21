import { TestBed } from '@angular/core/testing';

import { FiledownloadService } from './filedownload.service';

describe('FiledownloadService', () => {
  let service: FiledownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiledownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
