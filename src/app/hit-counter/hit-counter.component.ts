import { Component } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Visits } from '../hits.models';


@Component({
  selector: 'app-hit-counter',
  templateUrl: './hit-counter.component.html',
  styleUrls: ['./hit-counter.component.css']
})



export class HitCounterComponent {
  
  public visits: Visits | undefined;
  
  constructor(
    private http: HttpClient,
    ) {}

    ngOnInit() {
      this.getCount()
      .subscribe((data: Visits) => {
        this.visits = { ...data };
      });
    }

  hitClick() {
   
    this.hitCount()
      .subscribe((data: Visits) => {
        this.visits = { ...data };
      });
  }

  //Hit counter API to increment counter.
  hitCount(): Observable<any>{
    return this.http
      .get<Visits>("https://api.countapi.xyz/hit/sureshapp/1ccb732e-b55a-4404-ad3f-0f99c02fe44e");
  }

  // Get the count 
  getCount(): Observable<any>{
    return this.http
      .get<Visits>("https://api.countapi.xyz/get/sureshapp/1ccb732e-b55a-4404-ad3f-0f99c02fe44e");

  }

}
