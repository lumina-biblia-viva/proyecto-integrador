import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Message {
    message: string,
    userType: string,
    class: string
}

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule]
})
export class ChatComponent implements OnInit, AfterViewChecked{
    @ViewChild('conversationContainer') conversationContainer!: ElementRef;

    public messages: Message[] = [];
    public question: string = "";
    private dummyMessage = "Vestibulum non ornare nibh, eu volutpat erat. Ut volutpat ex quis facilisis finibus. Cras tempus lacinia tellus eu ullamcorper. Aliquam erat volutpat. Duis maximus risus id sem convallis, vitae finibus tellus consectetur. Quisque at maximus justo, pharetra tincidunt felis. Praesent lobortis tempus lectus, non fermentum mi bibendum sit amet. Maecenas rhoncus vestibulum iaculis. Vestibulum faucibus velit nec ex posuere bibendum. Nam in leo nisi. Fusce consectetur ac mauris id hendrerit. In hac habitasse platea dictumst. Duis aliquam, tortor vel auctor ullamcorper, augue est cursus orci, vitae interdum nisl metus vel nisi. Fusce et ante eget augue volutpat dictum. In nec imperdiet ante, sed egestas lectus. Sed aliquam id velit vel bibendum.";

    constructor() {

    }

    ngAfterViewChecked(): void {
        this.scrollToBottom();
    }

    ngOnInit(): void {
    }

    scrollToBottom() {
        try {
            this.conversationContainer.nativeElement.scrollTop = this.conversationContainer.nativeElement.scrollHeight;
        } catch(err) { 
            console.error(err);
        }
    }


    public sendQuestion(): void {
        console.log(this.question);

        if (this.question.trim()) {
            this.messages.push({
                message: this.question.trim(),
                userType: "user",
                class: "b-user"
            });

            this.question = "";
        }

        const answer: Message = this.getAnswer()

        if (answer) {
            this.messages.push(answer);
        }
    }

    private getAnswer(): Message {
        return {
            message: this.dummyMessage + " \n" + this.dummyMessage,
            userType: "lumina",
            class: "b-lumina"
        };
    }
}
