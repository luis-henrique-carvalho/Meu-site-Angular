import { Component, OnInit } from '@angular/core';
import { Itens } from 'src/app/itens';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css'],
})
export class PortifolioComponent implements OnInit {
  itens: Itens[] = [
    {
      srcImg: '../../../assets/cust.png',
      title: 'Cust',
      small: 'Desenvolvimento web',
      github: 'https://github.com/luis-henrique-carvalho/Cust',
      button: 'GitHub',
      demo: 'https://github.com/luis-henrique-carvalho/Cust"',
    },

    {
      srcImg: '../../../assets/login2.jpg',
      title: 'Página de Login',
      small: 'Desenvolvimento web',
      github: 'https://github.com/luis-henrique-carvalho/Login-page-in-react',
      button: 'GitHub',
      demo: 'https://github.com/luis-henrique-carvalho/Login-page-in-react',
    },

    {
      srcImg: '../../../assets/selaria.jpg',
      title: 'Social Média Selaria',
      small: 'Designe Social Media',
      github: 'https://www.behance.net/gallery/135456645/SOCIAL-MEDIA-SELARIA',
      button: 'Behance',
      demo: 'https://www.behance.net/gallery/135456645/SOCIAL-MEDIA-SELARIAhttps://www.behance.net/gallery/135456645/SOCIAL-MEDIA-SELARIA',
    },

    {
      srcImg: '../../../assets/login.png',
      title: 'Página de Login Responsiva',
      small: 'Desenvolvimento web',
      github: "https://github.com/luis-henrique-carvalho/TELA-DE-LOGIN-COM-TEMA-DARK---HTML---CSS",
      button: 'GitHub',
      demo: 'https://tela-de-login-com-tema-dark-html-css-hynr.vercel.app/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
