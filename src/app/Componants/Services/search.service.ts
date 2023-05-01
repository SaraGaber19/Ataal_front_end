import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  private searchQuerySource = new BehaviorSubject<string>('');

  searchQuery$ = this.searchQuerySource.asObservable();

  setSearchQuery(query: string) {
    this.searchQuerySource.next(query);
  }
}
