import { Component, OnInit } from '@angular/core';
import { PostBaseComponentComponent } from '../post-base-component/post-base-component.component';


@Component({
  selector: 'app-august-six',
  templateUrl: './august-six.component.html',
  styleUrls: ['./august-six.component.css']
})
export class AugustSixComponent extends PostBaseComponentComponent implements OnInit {

  constructor() {
    super();
   }

}
