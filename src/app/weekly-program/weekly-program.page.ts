import { Component, OnInit } from '@angular/core';
import { weekly_program,initialize } from '../services/bucket';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-weekly-program',
  templateUrl: './weekly-program.page.html',
  styleUrls: ['./weekly-program.page.scss'],
})
export class WeeklyProgramPage implements OnInit {

  constructor() {initialize({ identity: environment.token }); }
  weeklyp;
  ngOnInit() {
    this.getweeklyprogram().then((data)=>this.weeklyp=data);
  }


  getweeklyprogram(){
    return weekly_program.get("618e39ac5ee9b9002f1560eb")
  }
}
