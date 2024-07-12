import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  public appPages = [
    { title: 'Dashboard', url: '/main/dashboard', icon: 'home' },
    { title: 'Add Contact', url: '/main/add-contact', icon: 'person-add' },
  ];
  constructor() {}

  ngOnInit() {}
}
