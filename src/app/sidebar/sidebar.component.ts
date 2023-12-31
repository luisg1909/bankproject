import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Editar usuario',  icon:'pe-7s-user', class: '' },
    { path: '/typography', title: 'Nuevo usuario',  icon:'pe-7s-door-lock', class: '' },
    { path: '/table', title: 'Ranking Bancario',  icon:'pe-7s-note2', class: '' },
    { path: '/promedio', title: 'Promedios grafico',  icon:'pe-7s-news-paper', class: '' },

    
    { path: '/login', title: 'login',  icon:'pe-7s-news-paper', class: '' },
    // { path: '/icons', title: 'Montos periodo',  icon:'pe-7s-science', class: '' },
    // { path: '/maps', title: 'Promedios',  icon:'pe-7s-map-marker', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    { path: '/upgrade', title: 'Crud Banca',  icon:'pe-7s-diskette', class: 'active-pro' },
];
    // { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
