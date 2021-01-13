import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pushNotifications';
  constructor(private swPush:SwPush){}
  readonly VAPID_PUBLIC_KEY="BAcCa8QHyIi8rx51A4JSBS225Ur7OFP89C7i_9sEziM2gAPfDlaHfIYbogvOhK6wrrnulOfPZFX8Ih2qpUiEl5g";
  subscribeToPushNotifications(){
     this.swPush.requestSubscription({
       serverPublicKey:this.VAPID_PUBLIC_KEY
     })
     .then()
  }
}
