import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.css']
})
export class VideoSectionComponent implements OnInit {

    @Input() videoUrl = '';
    @Input() isLeft;
    @Input() textNumber = "";

    isLeftBool: boolean = true;
  constructor() { }

    ngOnInit(): void {
        if (this.isLeft === 'true') {
            this.isLeftBool = true;
        }
        else if (this.isLeft === 'false'){
            this.isLeftBool = false;
        }
        console.log(this.isLeftBool);
  }

}
