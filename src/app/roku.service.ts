import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RokuService {

  address: string;

  constructor(
    private http: Http
  ) {
  }
  sendCommand(location, key) {

    return this.http
      .post(`${location}${key}`,
      '', []
      );
  }


}
