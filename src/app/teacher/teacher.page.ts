import { Component, OnInit } from '@angular/core';
import {
  initialize,
  teacher,
  teacher_speciality,
} from '../services/bucket';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {
  constructor(private route: ActivatedRoute) {
    initialize({ identity: environment.token });
  }
  teacher;
  teacherId;
  specialities;

  async ngOnInit() {
    this.teacherId = this.route.snapshot.paramMap.get('id');
    await this.getteacher().then((data) => (this.teacher = data));
    await this.getteacherspecialties().then(
      (data) => (this.specialities = data)
    );
  }
  getteacherspecialties() {
    let specİds = this.teacher.speciality;
    return teacher_speciality.getAll({
      queryParams: {
        relation: true,
        filter: {
          _id: { $in: specİds },
        },
      },
    });
  }
  option = {
    slidesPerView: 2,

  };
 

  getteacher() {
    return teacher.get(this.teacherId);
  }
}
