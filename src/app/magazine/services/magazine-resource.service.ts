import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Magazine } from '../models/magazine';

/*
 * I like to have a specific service responsible to handle Backend communications
 * I like to use the sufix `Resource` in files with this kind of responsibility
 */
@Injectable({
  providedIn: 'root'
})
export class MagazineResourceService {

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Magazine[]> {
    return this.http.get<Magazine[]>('assets/data/magazines.json');
  }

}
