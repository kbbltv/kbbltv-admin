import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Media } from '../../models/media/media';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public create(media: Media): Promise<Media> {
    return this.http.post<Media>(environment.apiUrl + "/media", media).toPromise();
  }

  public search(query: any): Promise<Paginate<Media>> {
    return this.http.get<Paginate<Media>>(environment.apiUrl + "/media", { params: query }).toPromise();
  }
}
