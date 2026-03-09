import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { MarkdownModule } from 'ngx-markdown';

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
    imports: [CommonModule, FormsModule, MarkdownModule]
})
export class ChatComponent implements OnInit, AfterViewChecked{
    @ViewChild('conversationContainer') conversationContainer!: ElementRef;

    public messages: Message[] = [];
    public question: string = "";

    constructor(
        private chatService: ChatService,
        private cdr: ChangeDetectorRef
    ) {

    }

    ngAfterViewChecked(): void {
        this.scrollToBottom();
    }

    ngOnInit(): void {
    }

    scrollToBottom() {
        try {            
            setTimeout(() => {
                const el = this.conversationContainer.nativeElement;
                el.scrollTop = el.scrollHeight;
            }, 500);
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
        }

        this.getAnswer(this.question);
        this.question = "";
    }

    private getAnswer(question: string): void {
        this.chatService.getAnswer(question).subscribe({
            next: (res) => {
                console.log(res);
                this.messages.push({
                    message: res.reply,
                    userType: "lumina",
                    class: "b-lumina"
                });
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error(err);
            }
        });
    }
}
