import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']  // ✅ corrigé
})
export class ContactComponent {
  public userEmail = '';
  public userMessage = '';
  protected messageEnvoye: boolean = false;

  public onSubmitForm(form: NgForm): void {
    console.log(form.value);
    this.messageEnvoye = true;
  }
}
