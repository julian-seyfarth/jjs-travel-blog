import { Component, OnInit } from '@angular/core';
import lgVideo from 'lightgallery/plugins/video';
import lgFullscreen from 'lightgallery/plugins/fullscreen';

@Component({
  selector: 'app-post-base-component',
  templateUrl: './post-base-component.component.html',
  styleUrls: ['./post-base-component.component.css']
})
export class PostBaseComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  settings = {
    plugins: [lgVideo, lgFullscreen],
    counter: true,
    gotoNextSlideOnVideoEnd: false,
    allowMediaOverlap: true,
    autoplayVideoOnSlide: true,
    actualSize: false,
    download: false,
    fullScreen: true,
    hideScrollbar: true,
    mobileSettings: { 
      controls: false, 
      showCloseIcon: true, 
      download: false, } 
  };

}
