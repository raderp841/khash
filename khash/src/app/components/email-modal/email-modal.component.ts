import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-modal',
  templateUrl: './email-modal.component.html',
  styleUrls: ['./email-modal.component.css']
})
export class EmailModalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
    onCloseModal(event: MouseEvent) {
        let classes = event.target.classList.value;
        if (classes.includes('modal-text') || classes.includes('form-control')) {
        }
        else if(classes.includes('btn')){
            setTimeout(() => this.navigateHome(), 500);
        }
        else {
            this.navigateHome();
        }
    }

     public navigateHome() {
        this.router.navigate(['/']);
    }
}
