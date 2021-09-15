import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Magazine } from '../models/magazine';

@Injectable({
  providedIn: 'root'
})
export class MagazineResourceService {

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Magazine[]> {
    return this.http.get<Magazine[]>('assets/data/magazines.json');
  }

}
