import { Component, OnInit } from '@angular/core';
import { performance, Performance, initialize } from '../services/bucket';
import { environment } from 'src/environments/environment';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-performance',
  templateUrl: './performance.page.html',
  styleUrls: ['./performance.page.scss'],
})
export class PerformancePage implements OnInit {
  constructor(private router: Router) {
    initialize({ identity: environment.token });
  }

  performances: Performance[];
  metrics;
  route;
  ngOnInit() {
    this.getperformances().then((data) => {
      this.performances = data;
      if (this.performances.length) {
        this.metrics = Object.keys(this.performances[0].metrics);
      }
    });
    this.route=this.router.url;

  }

  getperformances() {
    return performance.getAll({
      queryParams: {
        relation: true,
        filter: { user: '618b75295ee9b9002f154683' },
        sort: { created_at: -1 },
      },
    });
  }
}
