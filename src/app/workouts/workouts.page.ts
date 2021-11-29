import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  initialize,
  teacher,
  training,
  video_packet,
} from '../services/bucket';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {
  constructor(private router: Router) {
    initialize({ identity: environment.token });
  }
  trainings;
  video_packet;
  route;
  ngOnInit() {
    this.gettreainingvideos().then((data) => (this.trainings = data));
    this.route=this.router.url;
  }
  gettreainingvideos() {
    return training.getAll({
      queryParams: {
        relation: ['packet.videos', 'teacher'],
        filter: { user: '618b75295ee9b9002f154683' },
      },
    });
  }
}
