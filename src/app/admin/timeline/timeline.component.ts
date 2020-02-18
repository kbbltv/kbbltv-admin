import { Component, OnInit, NgZone } from '@angular/core';
import { VideoTimeline } from 'src/app/shared/models/video-timeline/video-timeline';
import { VideoTimelineService } from 'src/app/shared/services/video-timeline/video-timeline.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Media } from 'src/app/shared/models/media/media';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  today = new Date();
  timelineDate: Date;
  videoTimeline: VideoTimeline[] = [];

  constructor(
    private readonly videoTimelineService: VideoTimelineService,
    private readonly snackBar: MatSnackBar,
    private readonly ngZone: NgZone
  ) { }

  ngOnInit() {
    this.timelineDate = new Date();
    this.timelineDate.setHours(0);
    this.timelineDate.setMinutes(0);
    this.timelineDate.setSeconds(0);
    this.timelineDate.setMilliseconds(0);
    this.loadVideoTimeline();
  }

  loadVideoTimeline() {
    let start = this.timelineDate;
    let end = this.getEndDate();
    console.log(start, end); 
    this.videoTimelineService.get(start, end)
    .then(videoTimeline => {
      console.log(videoTimeline);
      this.videoTimeline = videoTimeline;
    })
    .catch(err => {
      console.error(err);
      alert(err.message);
    })
  }

  dropVideo(event: any) {
    console.log(event);
    this.insertVideoTimeline(event.item.data);
  }

  insertVideoTimeline(media: Media) {
    let videoTimeline = new VideoTimeline();
    videoTimeline.media = media;
    if (this.videoTimeline.length > 0) {
      let lastVideo = this.videoTimeline[this.videoTimeline.length - 1];
      let lastVideoEndAtDate = new Date(lastVideo.endAt);
      let startAtTime = lastVideoEndAtDate.getTime() + 1;
      videoTimeline.startAt = new Date(startAtTime);
    } else {
      videoTimeline.startAt = this.timelineDate;
    }
    let endAtTime = videoTimeline.startAt.getTime() + (media.duration * 1000);
    videoTimeline.endAt = new Date(endAtTime);
    console.log(videoTimeline.endAt.getTime() >= this.getEndDate().getTime(), videoTimeline.endAt.getTime(), this.getEndDate().getTime())
    if(videoTimeline.endAt.getTime() >= this.getEndDate().getTime()) {
      this.ngZone.run(() => {
        this.timelineDate.setDate(this.timelineDate.getDate() + 1);
        console.log(this.timelineDate);
        this.loadVideoTimeline();
      });
      
    }
    this.videoTimelineService.insert(videoTimeline)
    .then(timelineEntry => {
      this.loadVideoTimeline();
    })
    .catch(err => {
      console.error(err);
      alert(err.message);
    })
  }

  private getEndDate(): Date {
    let endDate = new Date(this.timelineDate.getTime());
    endDate.setHours(23);
    endDate.setMinutes(59);
    endDate.setSeconds(59);
    endDate.setMilliseconds(59);
    return endDate;
  }
}
