import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { StorageService } from 'src/app/services/storage.service';
// import { latLng, tileLayer, marker, Marker } from 'leaflet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  segment = 'table'; // Default segment

  // contacts = [];

  items = [
    {
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'john@example.com',
      address: '123 Main St',
      longitude: '12.345',
      latitude: '67.890',
    },
    {
      name: 'Jane Smith',
      phone: '987-654-3210',
      email: 'jane@example.com',
      address: '456 Elm St',
      longitude: '34.567',
      latitude: '89.012',
    },
  ];

  // constructor(private storageService: StorageService) {}

  // ngOnInit() {
  //   this.loadContacts();
  // }

  // async loadContacts() {
  //   this.contacts = await this.storageService.getAllContacts();
  // }

  contacts: Contact[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.loadContacts();
  }

  async loadContacts() {
    this.contacts = await this.storageService.getAllContacts();
  }
}
