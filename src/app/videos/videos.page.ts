import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { category, initialize, teacher, video } from '../services/bucket';
import { environment } from 'src/environments/environment';
import { data } from '@spica-devkit/bucket';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  constructor(private route: ActivatedRoute) {
    initialize({ identity: environment.token });
  }
  categoryId;
  videos;
  category;
  video;
  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.getCategory().then((data) => (this.category = data));
    this.getVideos().then((data) => (this.videos = data));
  }

  getCategory() {
    return category.get(this.categoryId);
  }

  getVideos() {
    return video.getAll({
      queryParams: { relation: true, filter: { category: this.categoryId } },
    });
  }
}
