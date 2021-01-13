import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pushNotifications';
  onSubmit(){
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    }
  
    // Let's check whether notification permissions have alredy been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Hello");
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied' ) {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hello");
        }
      });
    }
  
  }
 
}
