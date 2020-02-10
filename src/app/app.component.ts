import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fxScience';
}
window.onload = () => {
  const element = document.querySelector('video');
  element.muted = true;
  element.autoplay = true;
};
