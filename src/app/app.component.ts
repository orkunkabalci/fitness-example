import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { VideoService } from './services/video.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  watched_videos;
  user;
  userId;
  activeclass;
  constructor(private menu: MenuController, private vservice: VideoService) {}
  async ngOnInit() {
    this.user = await this.vservice.getUser();
    this.watched_videos = await this.vservice.getwatcedhwideos();
    await this.menuclose('branches');
    this.checkactive('branches');
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
    this.menu.close();
  }

  menuclose(asd) {
    this.activeclass = asd;
    this.menu.close();
  }
  checkactive(asd) {
    return this.activeclass == asd;
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
