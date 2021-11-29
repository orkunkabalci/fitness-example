import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { initialize, video, watched_video } from '../services/bucket';
import { environment } from 'src/environments/environment';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  videoId;
  video;
  wvideo;
  asdd;
  user;

  constructor(private vservice: VideoService, private route: ActivatedRoute) {
    initialize({ identity: environment.token });
  }
  async ngOnInit() {
    this.videoId = this.route.snapshot.paramMap.get('id');
    this.wvideo = await this.vservice.getwatchedwideosbyId(this.videoId);
    this.video = await this.vservice.getvideo(this.videoId);
    this.user = await this.vservice.getUser();
  }

  async addwatched() {
    let item = await this.vservice.getwatchedwideosbyId(this.videoId);
    if (item.length == 0) {
      return this.vservice
        .addwatched(this.video, this.user)
        .then(() => this.vservice.getwatcedhwideos)
        .then(
          async () =>
            (item = await this.vservice.getwatchedwideosbyId(this.videoId))
        )
        .then(() => (this.wvideo = item));
    } else {
      this.vservice
        .updatetime(this.wvideo)
        .then(() => (this.wvideo[0]['user'] = this.user))
        .then(() => (this.wvideo[0]['video'] = this.video));
    }
  }
}
