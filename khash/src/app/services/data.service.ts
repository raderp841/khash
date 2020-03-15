import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    ptexts = [
        {
            'index': 1,
            'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat in egestas erat imperdiet sed euismod nisi.'
        },
        {
            'index': 2,
            'text': 'Nominavi deseruisse vel cu, eu vel hinc commune eleifend, eu mea eius tamquam. Nam esse equidem mentitum id. Ea mundi omnes cum. Ut nulla democritum mediocritatem pri, id vix erat conclusionemque. Et detracto assueverit pri.'
        },
        {
            'index': 3,
            'text': 'Lorem ipsum dolor sit amet, per nemore invidunt apeirian at, animal option sea ut. Altera eirmod adolescens has cu, ut usu eius definitionem. Fugit adipisci vel at. Sea persequeris voluptatibus no.'
        },

    ];

    constructor() { }

    getTextByIndex(index: number) {
        return this.ptexts.filter(p => p.index == index)[0].text.slice();
    }
}

