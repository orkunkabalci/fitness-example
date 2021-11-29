import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  category,
  initialize,
  teacher,
  teacher_speciality,
  video,
} from '../services/bucket';
import { environment } from 'src/environments/environment';
import { data } from '@spica-devkit/bucket';
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  styleUrls: ['./teachers.page.scss'],
})
export class TeachersPage implements OnInit {
  constructor(private route: ActivatedRoute) {
    initialize({ identity: environment.token });
  }
  teacher_specialityId;
  teachers;
  teacher_speciality;
  categories;
  ngOnInit() {
    this.teacher_specialityId = this.route.snapshot.paramMap.get('id');
    this.getteachers().then((data) => (this.teachers = data));
    this.getteacher_speciality().then(
      (data) => (this.teacher_speciality = data)
    );
    this.getcategories().then((data) => (this.categories = data));
  }
  coption = {
    slidesPerView: 2,
  };
  toption = {
    slidesPerView: 3,
  };
  getteacher_speciality() {
    return teacher_speciality.get(this.teacher_specialityId);
  }
  getcategories() {
    return category.getAll({
      queryParams: {
        relation: true,
        filter: {
          branches: this.teacher_specialityId,
        },
      },
    });
  }

  getteachers() {
    return teacher.getAll({
      queryParams: {
        relation: true,
        filter: { speciality: this.teacher_specialityId },
      },
    });
  }
}
