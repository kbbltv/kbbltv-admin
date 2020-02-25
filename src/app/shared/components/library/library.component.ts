import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaService } from '../../services/media/media.service';
import { Media } from '../../models/media/media';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  search = '';
  mediaList: Media[] = [];
  @Output() mediaClicked = new EventEmitter();

  constructor(
    private readonly mediaService: MediaService
  ) { }

  ngOnInit() {
   this.searchMedia();
  }

  clickMedia(media) {
    this.mediaClicked.emit(media);
  }

  searchMedia() {
    let query = { page: 1, search: this.search };
    console.log(query);
    this.mediaService.search(query)
    .then(mediaList => {
      this.mediaList = mediaList.docs;
    })
  }

}
