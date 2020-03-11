import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailModalComponent } from './components/email-modal/email-modal.component';


const routes: Routes = [
    {path: 'mail', component: EmailModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
