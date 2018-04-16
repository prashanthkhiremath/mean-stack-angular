import { Component } from '@angular/core';

import { Message } from './messages/message.model';
import {MessageService} from './messages/message.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [
        `
        hr {
            display: block;
            height: 1px;
            background: transparent;
            width: 100%;
            border: none;
            border-top: solid 1px #aaa;
        }
        `
    ],
    providers: [MessageService]
})
export class AppComponent {
    
}