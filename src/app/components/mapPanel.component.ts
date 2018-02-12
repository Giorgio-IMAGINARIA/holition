// ANGULAR COMPONENTS
import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';

@Component({
    selector: 'mapPanel',
    templateUrl: '../templates/mapPanel.component.html',
    styleUrls: ['../styles/mapPanel.component.css']
})
export class MapPanelComponent implements OnInit {
    constructor(
        private mapService: MapService,
    ) { }

    ngOnInit(): void {
        this.requestData();
    }
    private requestData(): void {
        this.mapService.requestData();
    }

}