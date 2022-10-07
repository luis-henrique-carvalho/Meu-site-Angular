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
      name: 'HTML',
      name__exp: 'Experiente',
    },
    {
      name: 'CSS',
      name__exp: 'Experiente',
    },
    {
      name: 'JAVASCRIPT',
      name__exp: 'Experiente',
    },
    {
      name: 'REACT',
      name__exp: 'Experiente',
    },
    {
      name: 'ANGULAR',
      name__exp: 'Estudando',
    },
    {
      name: 'Git',
      name__exp: 'Experiente',
    },
  ];

  designers: Experiences[] = [
    {
      name: 'PHOTOSHOP',
      name__exp: 'Experiente',
    },
    {
      name: 'COREW DRAW',
      name__exp: 'Experiente',
    },
    {
      name: 'ILLUSTRATOR',
      name__exp: 'Experiente',
    },
    {
      name: 'AFTER EFECTS',
      name__exp: 'Experiente',
    },
    {
      name: 'FIGMA',
      name__exp: 'Estudando',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
