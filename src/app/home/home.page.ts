import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { user, User, initialize, category, teacher } from "../services/bucket"
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) { initialize({ identity: environment.token }) }
  categories;
  teachers;
  ngOnInit() {
    this.getCategories().then((data) => this.categories = data);
    this.getteachers().then((data)=> this.teachers=data);
  }
  

  getCategories(){
    return category.getAll();
  }

 

  getteachers(){
    return teacher.getAll({ queryParams: { relation: true}})
  }
  option = {
    slidesPerView: 3,
    // centeredSlides: true,
    spaceBetween: 10,
    // autoplay: true,
  }

  
}
