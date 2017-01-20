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
  address: string;

  constructor(
    private roku: RokuService
  ) { }


  ngAfterViewInit() {
    document.getElementById('preloader').style['display'] = 'none';
    this.address = localStorage.getItem('address');
  }

  setIp() {
    let address = 'http://' + prompt('Please enter your Roku\'s IP Address:', '192.168.0.110').trim() + ':8060/keypress/';

    this.address = address;
    localStorage.setItem('address', this.address);
  }

  press(key: string) {
    if (this.allowedKeys.hasOwnProperty(key)) {
      this.keyPress = true;
      this.roku.sendCommand(this.address, this.allowedKeys[key]).subscribe();
      setTimeout(() => {
        this.keyPress = false;
      }, 250);
    }

  }


}
