// ANGULAR COMPONENTS
import { Component, OnInit } from '@angular/core';
// SERVICES
import { MapService } from '../services/map.service';

@Component({
    selector: 'mainContent',
    templateUrl: '../templates/mainContent.component.html',
    styleUrls: ['../styles/mainContent.component.css']
})
export class MainContentComponent implements OnInit {
    constructor(
        private mapService: MapService
    ) { }
    ngOnInit(): void {
        this.requestData();
    }
    private requestData(): void {
        this.mapService.requestData();
    }
}