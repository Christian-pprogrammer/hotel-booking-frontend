import { Component, OnInit, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }
  width = screen.width;
  ngOnInit(): void {
    
  }
  isModalOpen: boolean = false;
  modalMessage: string;
  openModal(message: string) {
    this.modalMessage = message;
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
}

export function openModal() {
  const modal = new ModalComponent();
  modal.openModal('Hello error');
}


