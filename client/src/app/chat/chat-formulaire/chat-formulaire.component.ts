import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-chat-formulaire',
  templateUrl: './chat-formulaire.component.html',
  styleUrls: ['./chat-formulaire.component.scss']
})
export class ChatFormulaireComponent implements OnInit {

  @Output() nouveauMessage: EventEmitter<Message>;
  public texte: string;

  constructor() {
    this.nouveauMessage = new EventEmitter<Message>();
  }

  ngOnInit() {
    this.texte = '';
  }
  
  public envoyer(): void {
    const message = new Message();
    message.auteur = 'timothée';
    message.date = new Date();
    message.texte = this.texte;
    this.nouveauMessage.emit(message);
    }
}
