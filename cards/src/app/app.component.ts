import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { title: 'Neat Tree', username: 'Bane', content: 'Look at that tree', imageUrl: 'assets/tree.jpeg' },
    { title: 'Snowy Mountain', username: 'John', content: 'Look at that mountain', imageUrl: 'assets/mountain.jpeg' },
    { title: 'Mountain Biking', username: 'Jim', content: 'Look at that bike', imageUrl: 'assets/biking.jpeg' },
  ]
}
