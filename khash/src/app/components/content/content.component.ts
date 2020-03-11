import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    onClickFacebook() {
        window.open('https://www.facebook.com/Liberty-Home-Mortgage-810999295604797/');
    }

    onClickInstagram() {
        window.open('https://www.instagram.com/khash_saghafi/');
    }

    onClickLinkedin() {
        window.open('https://www.linkedin.com/company/liberty-home-mortgage-corporation/');
    }

    onClickTwitter() {
        window.open('https://twitter.com/finance_wizard?lang=en');
    }
}
