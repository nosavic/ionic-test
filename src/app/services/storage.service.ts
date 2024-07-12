import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public async get(key: string) {
    return await this._storage?.get(key);
  }

  public async getAllContacts(): Promise<Contact[]> {
    let contacts = await this._storage?.get('contacts');
    return contacts || [];
  }

  public async addContact(contact: Contact) {
    let contacts = await this.getAllContacts();
    contacts.push(contact);
    await this.set('contacts', contacts);
  }
}
