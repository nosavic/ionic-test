import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Contact } from 'src/app/models/contact.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {
  contactForm: FormGroup;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private storageService: StorageService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^0[0-9]{9,14}$')]],
      email: ['', [Validators.required, Validators.email]],
      addresses: this.fb.array([this.fb.control('', Validators.required)]),
      longitude: [{ value: 58.2277, disabled: true }],
      latitude: [{ value: 89.04585, disabled: true }],
    });
  }

  ngOnInit() {}

  get addresses(): FormArray {
    return this.contactForm.get('addresses') as FormArray;
  }

  addAddress() {
    if (this.addresses.length < 5) {
      this.addresses.push(this.fb.control('', Validators.required));
    }
  }

  removeAddress(index: number) {
    if (this.addresses.length > 1) {
      this.addresses.removeAt(index);
    }
  }

  updateAddress(event: any, index: number) {
    this.addresses.at(index).setValue(event.detail.value);
  }

  async saveContact() {
    if (this.contactForm.valid) {
      const contactData = this.contactForm.getRawValue(); // Get form data including disabled fields
      await this.storageService.addContact(contactData);
      this.router.navigate(['/main/dashboard']);
    }
  }

  getRandomAddress(): string {
    const randomIndex = Math.floor(Math.random() * this.addresses.length);
    return this.addresses.at(randomIndex)?.value || '';
  }
}
