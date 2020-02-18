import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { VideoTimeline } from '../../models/video-timeline/video-timeline';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoTimelineService {

  constructor(
    private readonly http: HttpClient
  ) { }

  get(start: Date, end: Date): Promise<VideoTimeline[]> {
    const params = new HttpParams()
    .set('start', start.toUTCString())
    .set('end', end.toUTCString());
    return this.http.get<VideoTimeline[]>(environment.apiUrl + '/video-timeline', { params: params }).toPromise();
  }

  insert(videoTimeline: VideoTimeline): Promise<VideoTimeline> {
    return this.http.post<VideoTimeline>(environment.apiUrl + '/video-timeline', videoTimeline).toPromise();
  }
}
