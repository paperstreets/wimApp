import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WimDataService {
  private wimList: any[] = [];
  private wimListSubject = new ReplaySubject<any[]>(1);
  wimList$ = this.wimListSubject.asObservable();

  constructor() {
    this.loadData();
  }

  setWimList(list: any[]) {
    this.wimList = list;
    this.wimListSubject.next(list);
  }

  getWimList() {
    return this.wimList;
  }

  private loadData() {
    // Load the data here and pass it to wimListSubject
    // Instead of this comment, you can add code to load the data
    // When the data is loaded, call this.setWimList(loadedData)
    const loadedData: any[] = []; // Replace this with your actual data loading logic
    this.setWimList(loadedData);
  }
}