//@ts-check
import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Iva } from '../iva';
import { IvaService } from '../iva.service';

@Component({
  selector: 'app-iva-search',
  templateUrl: './iva-search.component.html',
  styleUrls: [ './iva-search.component.css' ]
})
export class IvaSearchComponent implements OnInit {
  ivas$: Observable<Iva[]>;
  private searchTerms = new Subject<string>();

  constructor(private ivaService: IvaService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.ivas$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.ivaService.searchIva(term)),
    );
  }
}