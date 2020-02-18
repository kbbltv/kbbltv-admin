import { Component, OnInit } from '@angular/core';
import { Media } from 'src/app/shared/models/media/media';
import { YoutubeDataService } from 'src/app/shared/services/youtube-data/youtube-data.service';
import { YoutubeData } from 'src/app/shared/models/youtube-data/youtube-data';
import { FormControl, Validators } from '@angular/forms';
import { MediaService } from 'src/app/shared/services/media/media.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-medias-dashboard',
  templateUrl: './medias-dashboard.component.html',
  styleUrls: ['./medias-dashboard.component.scss']
})
export class MediasDashboardComponent implements OnInit {

  // add
  newMediaAddress: string;
  newMediaFormControl: FormControl;
  youtubeData: YoutubeData;
  newMedia: Media;

  // list
  mediaList: Media[] = [];
  page = 1;
  hasNextPage: boolean;

  // view props
  new_media = false;

  constructor(
    private readonly youtubeDataService: YoutubeDataService,
    private readonly mediaService: MediaService,
    private readonly matSnack: MatSnackBar
  ) { }

  ngOnInit() {
    this.newMediaFormControl = new FormControl('', Validators.min(1) );
    this.getMediaList(null);
  }

  getMediaList(search: string): void {
    this.page = 1;
    let query = { page: this.page };
    if (search && search.length > 0) {
      query['search'] = search;
    }
    this.mediaService.search(query)
    .then(res => {
      this.mediaList = res.docs;
      this.hasNextPage = res.hasNextPage;
    })
    .catch(err => {
      alert('DAFUC?!');
    });
  }

  loadMore(search): void {
    this.page = this.page + 1;
    let query = { page: this.page };
    if (search && search.length > 0) {
      query['search'] = search;
    }
    this.mediaService.search(query)
    .then(res => {
      res.docs.forEach(media => {
        this.mediaList.push(media);
      });
      this.hasNextPage = res.hasNextPage;
    })
    .catch(err => {
      alert('DAFUC?!');
    });
  }

  getVideoData(): void {
    this.youtubeDataService.getVideoData(this.newMediaAddress)
    .then(res => {
      this.youtubeData = res;
      this.newMedia = new Media();
      this.newMedia.name = this.youtubeData.title;
      this.newMedia.player = 'youtube';
      this.newMedia.id_player = this.youtubeData.id;
      this.newMedia.address = this.youtubeData.url;
      this.newMedia.thumbnail_url = this.youtubeData.thumbnail_url;
      this.newMedia.author_name = this.youtubeData.author_name;
    })
    .catch(err => {
      console.error(err);
      alert('Video not found, your idiot!');
    })
  }

  addNewMedia(): void {
    this.mediaService.create(this.newMedia)
    .then(res => {
      this.new_media = false;
      this.youtubeData = null;
      this.newMedia = null;
      this.getMediaList(null);
      this.matSnack.open("Video was added to library successfully!", "TOP", { duration: 3000 });
    }).catch(err => {
      this.matSnack.open("A mysterious mistake happened", "FFFFFFUUUUUUUUUUUUUUUU", { duration: 3000 });
    })
  }

}
