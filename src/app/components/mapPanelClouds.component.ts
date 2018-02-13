// ANGULAR COMPONENTS
import { Component, OnInit } from '@angular/core';
// SERVICES
import { MapService } from '../services/map.service';
// INTERFACES
interface WeatherArrayObject {
    description: string,
    icon: string,
    id: number,
    mains: string
}

interface MapDetails {
    base: string,
    clouds: { all: string },
    cod: number,
    coord: { lon: number, lat: number },
    dt: number,
    id: number,
    main: {
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number
    }
    name: string,
    sys: {
        country: string,
        id: string,
        message: number,
        sunrise: number,
        sunset: number,
        type: number
    },
    visibility: number,
    weather: Array<WeatherArrayObject>,
    wind: {
        deg: number,
        speed: number
    }
}
@Component({
    selector: 'mapPanelClouds',
    templateUrl: '../templates/mapPanelClouds.component.html',
    styleUrls: ['../styles/mapPanel.component.css']
})
export class MapPanelCloudsComponent implements OnInit {
    //Listeners 
    private mapServiceListener: any;
    private weatherObjectToShow: MapDetails = {
        base: 'loading...',
        clouds: { all: 'loading...' },
        cod: 0,
        coord: { lon: 0, lat: 0 },
        dt: 0,
        id: 0,
        main: {
            humidity: 0,
            pressure: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0
        },
        name: 'loading...',
        sys: {
            country: 'loading...',
            id: 'loading...',
            message: 0,
            sunrise: 0,
            sunset: 0,
            type: 0
        },
        visibility: 0,
        weather: [],
        wind: {
            deg: 0,
            speed: 0
        }
    }
    constructor(
        private mapService: MapService
    ) { }
    ngOnInit(): void {
        this.checkMapService();
    }
    ngOnDestroy(): void {
        this.mapServiceListener.unsubscribe();
    }

    private checkMapService(): void {
        this.mapServiceListener = this.mapService.activeMapStateObservable.subscribe(
            response => {
                console.log('response: ', response);
                this.weatherObjectToShow = response;
            },
            error => {
                console.error(error);
            }
        );
    }
}