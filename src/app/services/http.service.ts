import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getEmail(mail: FormControl<string | null>) {
    return this.http.get(
      'http://localhost:4200/main?mail=' +
        mail
    )
  }

}
