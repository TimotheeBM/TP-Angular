import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public messages: Array<Message>;

  constructor(private httpClient: HttpClient) {
    this.messages = new Array<Message>();
  }

  public buildMessages(resultats: Array<any>): Array<Message> {
    const messages = [];
    if (resultats != null) {
      for (const result of resultats) {
        const message = new Message(result);
        messages.push(message);
      }
    }
    return messages;
  }
  public getMessages(): Observable<Array<Message>> {
    return new Observable<Array<Message>>((observer) => {
      this.httpClient.get<Array<any>>('http://127.0.0.1:3000')
        .subscribe(
          (messages) => {
            console.log(messages);
            this.messages = this.buildMessages(messages);
            observer.next(this.messages);
          }, (error) => observer.error(error),
          () => observer.complete()
        );
    });
  }

  public addMessage(message: Message):Observable<Array<Message>>{
    this.messages.push(message);
    return of(this.messages); // angular 6
    // sinon : return Observable.of()
    }
}
