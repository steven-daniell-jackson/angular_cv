import { TestBed, inject } from '@angular/core/testing';
import { YoutubeChannelSanguinezorService } from './youtube-channel-sanguinezor.service';

describe('YoutubeChannelSanguinezorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeChannelSanguinezorService]
    });
  });

  it('should ...', inject([YoutubeChannelSanguinezorService], (service: YoutubeChannelSanguinezorService) => {
    expect(service).toBeTruthy();
  }));
});
