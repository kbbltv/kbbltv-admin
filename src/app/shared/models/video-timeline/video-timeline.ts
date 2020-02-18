import { Media } from '../media/media';

export class VideoTimeline {
    _id: string;
    media: Media;
    startAt: Date;
    endAt: Date;
}
