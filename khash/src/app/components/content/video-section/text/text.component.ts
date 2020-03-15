import { Component, OnInit, Input } from '@angular/core';
import { TextService } from '../../../../services/text.service';

@Component({
    selector: 'app-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

    @Input() textNumber: string = "";
    pText = "";
    index: number;

    constructor(private textService: TextService) { }

    ngOnInit(): void {
        if (this.textNumber == 'one') {
            this.index = 1;
        }
        else if (this.textNumber == 'two') {
            this.index = 2;
        }
        else if (this.textNumber == 'three') {
            this.index = 3;
        }
        this.pText = this.textService.getPText(this.index);
    }

}
