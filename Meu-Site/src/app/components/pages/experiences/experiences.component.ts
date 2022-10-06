import { Component, OnInit } from '@angular/core';

import { Experiences } from 'src/app/Experiences';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
})
export class ExperiencesComponent implements OnInit {
  experiences: Experiences[] = [
    {
      class__article: 'experience__detailes',
      class__icon: 'bi bi-bookmark-check-fill',
      name: 'HTML',
      class__smal: 'text-light',
      name__exp: 'Experiente'
    },
    {
      class__article: 'experience__detailes',
      class__icon: 'bi bi-bookmark-check-fill',
      name: 'CSS',
      class__smal: 'text-light',
      name__exp: 'Experiente'
    },
    {
      class__article: 'experience__detailes',
      class__icon: 'bi bi-bookmark-check-fill',
      name: 'JAVASCRIPT',
      class__smal: 'text-light',
      name__exp: 'Experiente'
    },
    {
      class__article: 'experience__detailes',
      class__icon: 'bi bi-bookmark-check-fill',
      name: 'REACT',
      class__smal: 'text-light',
      name__exp: 'Experiente'
    },
    {
      class__article: 'experience__detailes',
      class__icon: 'bi bi-bookmark-check-fill',
      name: 'ANGULAR',
      class__smal: 'text_light',
      name__exp: 'Estudando',
    },
    {
      class__article: 'experience__detailes',
      class__icon: 'bi bi-bookmark-check-fill',
      name: 'Git',
      class__smal: 'text-light',
      name__exp: 'Experiente'
    },
  ];

  designers: Experiences[] = [
    {
      class__article: 'experience__detailes',
      class__icon: 'bi bi-bookmark-check-fill',
      name: 'PHOTOSHOP',
      class__smal: 'text-light',
      name__exp: 'Experiente'
    },
    {
      class__article: 'experience__detailes',
      class__icon: 'bi bi-bookmark-check-fill',
      name: 'COREW DRAW',
      class__smal: 'text-light',
      name__exp: 'Experiente'
    },
    {
      class__article: 'experience__detailes',
      class__icon: 'bi bi-bookmark-check-fill',
      name: 'ILLUSTRATOR',
      class__smal: 'text-light',
      name__exp: 'Experiente'
    },
    {
      class__article: 'experience__detailes',
      class__icon: 'bi bi-bookmark-check-fill',
      name: 'AFTER EFECTS',
      class__smal: 'text-light',
      name__exp: 'Experiente'
    },
    {
      class__article: 'experience__detailes',
      class__icon: 'bi bi-bookmark-check-fill',
      name: 'FIGMA',
      class__smal: 'text_light',
      name__exp: 'Estudando',
    },
    
  ]
  constructor() {}

  ngOnInit(): void {}
}
