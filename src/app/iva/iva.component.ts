import { Component, OnInit } from '@angular/core';
import { Iva } from '../iva';
import { IvaService } from '../iva.service';

@Component({
  selector: 'app-iva',
  templateUrl: './iva.component.html',
  styleUrls: ['./iva.component.css']
})

export class IvaComponent implements OnInit {
  ivas: Iva[];

  constructor(private ivaService: IvaService) {}

  ngOnInit() {
    this.getIvas();
  }

  getIvas(): void {
    this.ivaService.getIvas().subscribe(ivas => this.ivas = ivas);
  }

  add(valor:number, tipo:string): void {
    tipo = tipo.trim();
    if (!tipo || valor<=0) { return; }
    this.ivaService.addIva({ valor, tipo } as Iva)
      .subscribe(iva => {
        this.ivas.push(iva);
      });
  }

  delete(iva: Iva): void {    
    this.ivaService.deleteIva(iva).subscribe();
    this.ivas = this.ivas.filter(i => i !== iva);
  }

}
