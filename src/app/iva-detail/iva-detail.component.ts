//@ts-checks
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Iva } from '../iva.js';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IvaService } from '../iva.service.js';

@Component({
  selector: 'app-iva-detail',
  templateUrl: './iva-detail.component.html',
  styleUrls: ['./iva-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IvaDetailComponent implements OnInit {
  @Input() iva: Iva | undefined;

  constructor(
    private route: ActivatedRoute,
    private ivaService: IvaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getIva();
  }

  getIva(): void {
    let auxId = this.route.snapshot.paramMap.get('id');
    if (typeof auxId == 'number') {
      const id = auxId;
      this.ivaService.getIva(id).subscribe(iva => this.iva = iva);
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    let auxIva = this.iva;
    if (auxIva) {
      this.ivaService.updateIva(auxIva)
        .subscribe(() => this.goBack());
    }
  }
}
