import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Contact } from 'src/app/models/contact.model';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map-view',
  standalone: true,
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class MapViewComponent implements OnInit, AfterViewInit {
  contacts: Contact[] = [];
  map!: google.maps.Map;

  constructor(private storageService: StorageService) {}

  async ngOnInit() {
    this.contacts = await this.storageService.getAllContacts();
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 2,
    };

    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );

    this.contacts.forEach((contact) => {
      if (contact.latitude && contact.longitude) {
        new google.maps.Marker({
          position: { lat: contact.latitude, lng: contact.longitude },
          map: this.map,
          title: contact.name,
        });
      }
    });
  }
}
