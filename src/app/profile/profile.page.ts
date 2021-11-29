import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user, initialize } from '../services/bucket';
import { watched_video } from '../services/bucket';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(private vservice: VideoService) {
    initialize({ identity: environment.token });
  }

  user;
  watched_videos;
  training;
  video_packet;

  async ngOnInit() {
    this.getUser().then((data) => (this.user = data));
    this.watched_videos = await this.vservice.getwatcedhwideos();
  }
  getUser() {
    return user.get('618b75295ee9b9002f154683');
  }
}
