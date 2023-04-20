import { Component } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  user: User = new User("Hello John", 25, "",  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freeimages.com%2Ffr%2Fpremium-vector%2Fpeople-large-group-6392862&psig=AOvVaw0atbVCQ-lolx6upCvf0MVs&ust=1682089343003000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCQpKPduP4CFQAAAAAdAAAAABAD" )
  

  constructor() {
   
  }


}
