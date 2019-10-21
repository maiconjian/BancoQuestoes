import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[];
    constructor() { }

    ngOnInit() {
        this.items = [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            }
        ];
        // this.items = [
        //     {
        //         label: 'Configuração', icon: "fa fa-wrench",
        //         items: [
        //             [
        //                 {
        //                     items: [
        //                         { label: 'Usuario', routerLink: '/usuario' },
        //                         { label: 'Perfil'},
        //                         { label: 'Logout' }
        //                     ]
        //                 },

        //             ],
        //         ]
        //     },
    //         {
    //             label: 'Sports', icon: 'fa fa-fw fa-soccer-ball-o',
    //             items: [
    //                 [
    //                     {
    //                         label: 'Sports 1',
    //                         items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
    //                     },
    //                     {
    //                         label: 'Sports 2',
    //                         items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
    //                     },

    //                 ],
    //                 [
    //                     {
    //                         label: 'Sports 3',
    //                         items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
    //                     },
    //                     {
    //                         label: 'Sports 4',
    //                         items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         label: 'Sports 5',
    //                         items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
    //                     },
    //                     {
    //                         label: 'Sports 6',
    //                         items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
    //                     }
    //                 ]
    //             ]
    //         }
    
    }
}



