import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';  // <-- Import this

@Component({
  selector: 'app-root',
  standalone: true,  // <-- Ensure this is added
  imports: [RouterOutlet, FormsModule],  // <-- Add FormsModule here
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Helloworld';

  url = "https://www.bridgelabz.com";
  imgUrl = "https://i.pinimg.com/736x/71/d9/a9/71d9a9a5614ec8a9a17079ace15f10a0.jpg";

  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Hello from brigdeLabz ! ";
  }

  onClick($event: any) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput($event:any) {
    console.log("Change event occured!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is incorrect";
  }
}
