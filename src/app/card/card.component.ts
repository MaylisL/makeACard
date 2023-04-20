import { Component } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  user: User = new User("Hello John", 25, "", "https://cdn-icons-png.flaticon.com/512/5363/5363451.png")

  constructor() {
   
  }
  clearinput() {
    this.user.quote = "";
  }

}
