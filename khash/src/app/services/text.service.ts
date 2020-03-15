import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TextService {

   

    constructor(private dataService: DataService) { }

    getPText(index: number) {
        return this.dataService.getTextByIndex(index);
    }


}
