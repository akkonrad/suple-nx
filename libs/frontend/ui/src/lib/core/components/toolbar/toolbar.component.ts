import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { faBriefcaseMedical, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'front-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  faBriefcaseMedical = faBriefcaseMedical;
  faMoon = faMoon;
  faSun = faSun;

  nightMode = false;

  items: MenuItem[] = [
    {
      label: 'Home',
      icon: PrimeIcons.HOME,
      routerLink: ['']
    },
    {
      label: 'Supplements',
      icon: PrimeIcons.HEART,
      items: [
        {
          label: 'Add',
          icon: PrimeIcons.PLUS,
          routerLink: ['suple', 'add']
        },
        {
          label: 'List',
          icon: PrimeIcons.LIST,
          routerLink: ['suple', 'list']
        }
      ]
    },
    {
      label: 'Health results',
      icon: PrimeIcons.CHART_BAR,
      items: [
        {
          label: 'Add',
          icon: PrimeIcons.PLUS,
          routerLink: ['suple', 'add']
        },
        {
          label: 'List',
          icon: PrimeIcons.LIST,
          routerLink: ['suple', 'list']
        }
      ]
    },
    {
      label: 'Learn',
      icon: PrimeIcons.BOOK,
      styleClass: 'p-ml-6',
      items: [
        {
          label: 'Dictionary',
          icon: PrimeIcons.SORT_NUMERIC_DOWN
        },
        {
          label: 'Articles',
          icon: PrimeIcons.FILE
        }
      ]
    },
    {
      label: 'Admin',
      icon: PrimeIcons.LOCK_OPEN,
      styleClass: 'p-ml-6',
      items: [
        {
          label: 'Medical Publications',
          icon: PrimeIcons.PLUS_CIRCLE
        },
        {
          label: 'Items',
          icon: PrimeIcons.LIST
        },
        {
          label: 'Settings',
          icon: PrimeIcons.COG
        }
      ]
    }
  ];

}
