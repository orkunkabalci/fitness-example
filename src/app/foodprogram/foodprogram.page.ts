import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { food_program, initialize } from '../services/bucket';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-foodprogram',
  templateUrl: './foodprogram.page.html',
  styleUrls: ['./foodprogram.page.scss'],
})
export class FoodprogramPage implements OnInit {
  constructor(private router: Router) {
    initialize({ identity: environment.token });
  }
  index;
  activeprogram;
  foodprograms;
  route;
  async ngOnInit() {
    await this.getfoodprogram().then((data) => (this.foodprograms = data));
    this.activeprogram = this.foodprograms[0]._id;

    this.segmentChanged(this.activeprogram);
    this.route=this.router.url;

  }
  segmentChanged(event) {
    if (this.index == undefined) {
      this.activeprogram = this.foodprograms[0]._id;
    } else {
      this.activeprogram = event.detail.value;
    }
    return (this.index = this.foodprograms.findIndex(
      (x) => x._id === this.activeprogram
    ));
  }
  option = {
    slidesPerView: 2.5,
    pagination: false,
  };
  getfoodprogram() {
    return food_program.getAll({
      queryParams: {
        relation: true,
        filter: { user: '618b75295ee9b9002f154683' },
        sort: { created_at: -1 },
      },
    });
  }
}
