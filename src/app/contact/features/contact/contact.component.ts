import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,ButtonModule,DialogModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']  
})
export class ContactComponent {
  public visible: boolean = true;
  public userEmail = '';
  public userMessage = '';
  protected messageEnvoye: boolean = false;

  public onSubmitForm(form: NgForm): void {
    console.log(form.value);
    this.messageEnvoye = true;
    this.visible = false;
  }
}
