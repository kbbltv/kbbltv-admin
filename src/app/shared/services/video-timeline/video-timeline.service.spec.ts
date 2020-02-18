import { TestBed } from '@angular/core/testing';

import { VideoTimelineService } from './video-timeline.service';

describe('VideoTimelineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoTimelineService = TestBed.get(VideoTimelineService);
    expect(service).toBeTruthy();
  });
});
