import { TestBed } from '@angular/core/testing';

import { SubtitleConverterService } from './subtitle-converter.service';

describe('SubtitleConverterService', () => {
  let service: SubtitleConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubtitleConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
