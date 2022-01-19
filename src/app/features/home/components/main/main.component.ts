import { Component, OnInit } from '@angular/core';
import { Main } from '../../models/Home';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public main: Main[];

  constructor() { 
    this.main = [
      {
        title: 'Monstera Deliciosa',
        text: 'Monstera deliciosa, llamada comúnmente cerimán o costilla de Adán, es una especie de planta trepadora de la familia Araceae, endémica de selvas tropicales, que se distribuye desde el centro y sur de México hasta el norte de Argentina.',
        img: {
          src: 'https://c.stocksy.com/a/RvSA00/z9/2494473.jpg', alt: 'Planta Monstera'
        },
      },
      {
        title: 'Pachira aquática',
        text: 'Pachira aquatica, llamada popularmente castaño de Guayana, es una especie arbórea de la familia Bombaceae. Es nativa del norte de Sudamérica y América Central.',
        img: {
          src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pachira-1-1528976562.jpg?crop=0.891xw:1.00xh;0.0965xw,0&resize=480:*', alt: 'Planta Pachira Aquática'
        },
      },
    ]
  }

  ngOnInit(): void {
  }

};
