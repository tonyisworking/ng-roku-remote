import { Component, AfterViewInit } from '@angular/core';
import { RokuService } from './roku.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  allowedKeys = {
    'power': 'PowerOff', 'back': 'Back', 'home': 'Home',
    'up': 'Up', 'left': 'Left', 'ok': 'Select', 'right': 'Right',
    'down': 'Down', 'return': 'Backspace', 'asterisk': 'Info',
    'backward': 'Rev', 'forward': 'Fwd', 'play': 'Play',
    'volUp': 'VolumeUp', 'volDown': 'VolumeDown', 'mute': 'VolumeMute',

  };
  keyPress: boolean = false;

  constructor(
    private roku: RokuService
  ) {
  }

  ngAfterViewInit() {
    document.getElementById('preloader').style['display'] = 'none';
  }

  press(key: string) {
    if (this.allowedKeys.hasOwnProperty(key)) {
      this.keyPress = true;
      this.roku.sendCommand(this.allowedKeys[key]).subscribe();
      setTimeout(() => {
        this.keyPress = false;
      }, 250);
    }

  }


}
