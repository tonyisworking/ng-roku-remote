import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RokuService {

  address: string;

  constructor(
    private http: Http
  ) {
    this.address = 'http://192.168.0.110:8060/keypress/';
  }
  sendCommand(key) {

    return this.http
      .post(`${this.address}${key}`,
      '', []
      );
  }
}
