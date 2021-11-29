import { Injectable } from '@angular/core';
import {
  initialize,
  video,
  Watched_Video,
  watched_video,
  user,
} from '../services/bucket';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class VideoService {
  wvideos: Watched_Video[];
  asdasd;
  objIndex;
  constructor() {
    initialize({ identity: environment.token });
  }

  ngOnInit() {}

  getUser() {
    return user.get('618b75295ee9b9002f154683');
  }
  getwatcedhwideos() {
    if (this.wvideos) return of(this.wvideos).toPromise();
    return watched_video
      .getAll({
        queryParams: {
          relation: true,
          filter: { 'user._id': '618b75295ee9b9002f154683' },
          sort: { watched_date: -1 },
        },
      })
      .then((data) => (this.wvideos = data));
  }

  getwatchedwideosbyId(videoId) {
    if (this.wvideos) {
      let video = this.wvideos.filter((item) => item.video['_id'] == videoId);

      return of(video).toPromise();
    } else {
      return watched_video.getAll({
        queryParams: {
          relation: true,
          filter: {
            user: '618b75295ee9b9002f154683',
            video: videoId,
          },
        },
      });
    }
  }

  getvideo(videoId) {
    return video.get(videoId);
  }

  addwatched(video, user) {
    let neww = {
      user: user,
      video: video._id,
      watched_date: new Date(),
    };

    return watched_video
      .insert(neww)

      .then((data) => {
        data['user'] = user;
        data['video'] = video;
        let datatobepushed = data;
        datatobepushed['video'] = video;
        return datatobepushed;
      })
      .then((datatobepushed) => {
        this.wvideos.push(datatobepushed);
      })

      .then(
        () =>
          (this.wvideos = this.wvideos.sort(
            (a, b) =>
              new Date(b['watched_date']).getTime() -
              new Date(a['watched_date']).getTime()
          ))
      );
  }

  updatetime(wvideo) {
    let videoOfWvideo = JSON.parse(JSON.stringify(wvideo[0].video));
    let userofvideoOfWvideo = JSON.parse(JSON.stringify(wvideo[0].user));
    wvideo[0].watched_date = new Date();
    return watched_video
      .update(wvideo[0])
      .then((data) => {
        this.objIndex = this.wvideos.findIndex(
          (obj) => obj._id == wvideo[0]._id
        );
        data['video'] = videoOfWvideo;
        data['user'] = userofvideoOfWvideo;

        this.wvideos[this.objIndex] = data;
      })

      .then(
        () =>
          (this.wvideos = this.wvideos.sort(
            (a, b) =>
              new Date(b['watched_date']).getTime() -
              new Date(a['watched_date']).getTime()
          ))
      );
  }
}
