import { Component, OnInit } from '@angular/core';
import { VideoTimelineService } from 'src/app/shared/services/video-timeline/video-timeline.service';
import { VideoTimeline } from 'src/app/shared/models/video-timeline/video-timeline';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Media } from 'src/app/shared/models/media/media';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
    
  }

}
