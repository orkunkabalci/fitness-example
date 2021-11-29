import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import {
  user,
  User,
  initialize,
  category,
  teacher_speciality,
  teacher,
} from '../services/bucket';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.page.html',
  styleUrls: ['./branches.page.scss'],
})
export class BranchesPage implements OnInit {
  constructor(private data: DataService) {
    initialize({ identity: environment.token });
  }
  teachers;
  teacher_specialties;
  ngOnInit() {
    this.getteacherpeciality()
      .then((data) => (this.teacher_specialties = data))
    this.getteachers().then((data) => (this.teachers = data));
  }
  getteachers() {
    return teacher.getAll();
  }

  option = {
    slidesPerView: 3,
    spaceBetween: 10,
  };

  getteacherpeciality() {
    return teacher_speciality.getAll();
  }
}
