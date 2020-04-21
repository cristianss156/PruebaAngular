
import { Component, OnInit, Input } from '@angular/core';
import { Iva } from '../iva';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IvaService } from '../iva.service';

@Component({
  selector: 'app-iva-detail',
  templateUrl: './iva-detail.component.html',
  styleUrls: ['./iva-detail.component.css']
})
export class IvaDetailComponent implements OnInit {
  @Input() iva: Iva;
  
  constructor(
    private route: ActivatedRoute,
    private ivaService: IvaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getIva();
  }

  getIva(): void {
    const id = +this.route.snapshot.paramMap.get('id');    
    this.ivaService.getIva(id).subscribe(iva => this.iva = iva);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.ivaService.updateIva(this.iva[0])
      .subscribe(() => this.goBack());
  }
}
