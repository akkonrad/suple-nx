import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'front-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

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
