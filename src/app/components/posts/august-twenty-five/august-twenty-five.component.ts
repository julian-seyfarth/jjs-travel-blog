import { Component, OnInit } from '@angular/core';
import { PostBaseComponentComponent } from '../post-base-component/post-base-component.component';

@Component({
  selector: 'app-august-twenty-five',
  templateUrl: './august-twenty-five.component.html',
  styleUrls: ['./august-twenty-five.component.css']
})
export class AugustTwentyFiveComponent extends PostBaseComponentComponent  implements OnInit {

  constructor() { 
    super();
  }

}
