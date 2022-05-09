import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'app-discart',
    templateUrl: './discart.component.html',
    styleUrls: ['./discart.component.css']
})

export class DiscartComponent implements OnInit{

    constructor(
    ){}

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    title = 'reciclagem';
    lat: number = -23.5818051;
    lng: number = -46.5497623;
}