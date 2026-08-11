//@ts-checks
import { Component, OnInit } from '@angular/core';
import { Iva } from '../iva.js';
import { IvaService } from '../iva.service.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent implements OnInit {
  ivas: Iva[] = [];

  constructor(private ivaService: IvaService) { }

  ngOnInit() {
    this.getIvas();
  }

  getIvas(): void {
    this.ivaService.getIvas()
      .subscribe(ivas => this.ivas = ivas.slice(0, 2));
  }
}
