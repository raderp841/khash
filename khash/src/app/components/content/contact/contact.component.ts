import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router : Router) { }

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

    onEmailClick() {
        this.router.navigate(['./mail']);
    }
    onCallClick() {

    }
}
