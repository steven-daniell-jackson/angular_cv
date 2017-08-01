import { TestBed, inject } from '@angular/core/testing';
import { YoutubeChannelEpicOverwatchService } from './youtube-channel-epic-overwatch.service';

describe('YoutubeChannelEpicOverwatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeChannelEpicOverwatchService]
    });
  });

  it('should ...', inject([YoutubeChannelEpicOverwatchService], (service: YoutubeChannelEpicOverwatchService) => {
    expect(service).toBeTruthy();
  }));
});
