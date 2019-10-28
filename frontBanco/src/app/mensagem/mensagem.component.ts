import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
    selector: 'app-mensagem',
    templateUrl: './mensagem.component.html',
    styleUrls: ['./mensagem.component.css'],
    styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }
        :host ::ng-deep .custom-toast .ui-toast-message {
            color: #ffffff;
            background: #FC466B;
            background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);
            background: linear-gradient(to right, #3F5EFB, #FC466B);
        }
        :host ::ng-deep .custom-toast .ui-toast-close-icon {
            color: #ffffff;
        }
    `],
})
export class MensagemComponent implements OnInit {

    @Output() opcao = new EventEmitter();

    constructor(
        private messageService: MessageService, 
        ) { }

    ngOnInit() {
    }

    showSuccess(msg: any) {
        this.messageService.add({ key: 'm', severity: 'success', summary: msg, detail: '' });
    }

    showInfo(msg: any) {
        this.messageService.add({ key: 'm', severity: 'info', summary: msg, detail: '' });
    }

    showWarn(msg: any) {
        this.messageService.add({ key: 'm', severity: 'warn', summary: msg, detail: '' });
    }

    showError(msg: any) {
        this.messageService.add({ key: 'm', severity: 'error', summary: msg, detail: '' });
    }

    showCustom(msg: any) {
        this.messageService.add({ key: 'custom', severity: 'info', summary: msg, detail: '' });
    }

    showTopLeft(msg: any) {
        this.messageService.add({ key: 'tl', severity: 'info', summary: msg, detail: '' });
    }

    showTopCenter(msg: any, tipo: any) {
        this.messageService.add({ key: 'tc', severity: tipo, summary: msg, detail: '' });
    }

    showConfirm(msg: any, detalhe: any) {
        this.messageService.clear();
        this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: msg, detail: detalhe });
    }

    showMultiple() {
        this.messageService.addAll([
            { severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' },
            { severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' },
            { severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' }
        ]);
    }

    onConfirm() {
        this.opcao.emit(1);
        this.messageService.clear('c');
    }

    onReject() {
        this.opcao.emit(0);
        this.messageService.clear('c');
    }

    clear() {
        this.messageService.clear();
    }

}