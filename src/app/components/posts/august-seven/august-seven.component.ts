import { Component, OnInit } from '@angular/core';
import { PostBaseComponentComponent } from '../post-base-component/post-base-component.component';

@Component({
  selector: 'app-august-seven',
  templateUrl: './august-seven.component.html',
  styleUrls: ['./august-seven.component.css']
})
export class AugustSevenComponent extends PostBaseComponentComponent  implements OnInit {

  constructor() { 
    super();
  }

}
