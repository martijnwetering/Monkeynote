import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Notebook } from '../notes/shared/notebook.model';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    let notebooks: Notebook[] = [
      {
        id: 1,
        title: 'Marvel vilains notebooks',
        defaultNotebook: true,
        selected: true,
        notes: [
          {
            id: 1,
            title: 'Ultron',
            text: 'Very dangerous robot with laserbeam hands. Do not get close.'
          },
          {
            id: 2,
            title: 'Hella',
            text: 'Olmost impossible to defeat. Draws here power from Asgard.'
          },
          {
            id: 3,
            title: 'Thanos',
            text: 'Need all possible heroes to fight this guy. Purple looking!'
          }
        ]
      },

      {
        id: 2,
        title: 'DC heroes notebooks',
        defaultNotebook: false,
        selected: false,
        notes: [
          {
            id: 4,
            title: 'Batman',
            text: 'Entered his goth fase after his 30th birthday.'
          },
          {
            id: 5,
            title: 'Superman',
            text: 'Indestructable'
          },
          {
            id: 6,
            title: 'Wonder Woman',
            text: 'Nice personality. Don\'t get her angry! Cool lasso.'
          }
        ]
      },

      {
        id: 3,
        title: 'Best fantasy books',
        defaultNotebook: false,
        selected: false,
        notes: [
          {
            id: 7,
            title: 'Game of thrones',
            text: 'Backstabbing at its finest'
          },
          {
            id: 8,
            title: 'Malazan book of the fallen',
            text: 'Great characters and magic system.'
          },
          {
            id: 9,
            title: 'Name of the wind',
            text: 'Simply the best fantasy book out there.'
          }
        ]
      }
    ];

    return { notebooks };
  }
}
