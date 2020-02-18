import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YoutubeData } from '../../models/youtube-data/youtube-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public getVideoData(address: string): Promise<YoutubeData> {
    return this.http.get<YoutubeData>(environment.apiUrl + "/youtube-data", { params: { address: address } }).toPromise();
  }
}
