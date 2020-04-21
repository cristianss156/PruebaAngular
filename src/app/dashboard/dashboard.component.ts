import { Component, OnInit } from '@angular/core';
import { Iva } from '../iva';
import { IvaService } from '../iva.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
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