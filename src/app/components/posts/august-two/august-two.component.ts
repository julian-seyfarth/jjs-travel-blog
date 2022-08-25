import { Component, OnInit } from '@angular/core';
import { PostBaseComponentComponent } from '../post-base-component/post-base-component.component';

@Component({
  selector: 'app-august-two',
  templateUrl: './august-two.component.html',
  styleUrls: ['./august-two.component.css']
})
export class AugustTwoComponent extends PostBaseComponentComponent implements OnInit {

  constructor() { 
    super();
   }

}
