import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Toggle() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuBars = document.getElementById('menu-bars');
    mobileNav.classList.toggle('nav-expand');
    menuBars.classList.toggle('change');
  }

  SidebarOn() {
    const nav = document.getElementById('desktop-nav');
    const toggle = document.getElementById('sidebar-toggle');
    nav.classList.remove('display-none');
    toggle.classList.add('display-none');
   }

  SidebarOff() {
    const nav = document.getElementById('desktop-nav');
    const toggle = document.getElementById('sidebar-toggle');
    nav.classList.add('display-none');
    toggle.classList.remove('display-none');
  }

}




