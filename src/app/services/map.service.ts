import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {
    HttpParams,
    HttpClient,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';

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
    weather: Array<WeatherArrayObject>,
    wind: {
        deg: number,
        speed: number
    }
}

@Injectable()
export class MapService {
    constructor(private http: HttpClient) { }

    private currentMapState: MapDetails = {
        base: '',
        clouds: { all: '' },
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
        name: '',
        sys: {
            country: '',
            id: '',
            message: 0,
            sunrise: 0,
            sunset: 0,
            type: 0
        },
        weather: [],
        wind: {
            deg: 0,
            speed: 0
        }
    };

    public activeMapStateSubject: Subject<MapDetails> = new Subject<MapDetails>();
    public activeMapStateObservable: Observable<MapDetails> = this.activeMapStateSubject.asObservable();



    requestData(): void {
        let fullAddress: string = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather';
        let params: HttpParams = new HttpParams();
        params = params.append('q', 'London,uk');
        params = params.append('appid', '6145faa5ad3dafd8fb271ad16c0d7dab');
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        this.http.get(
            fullAddress,
            {
                params: params,
                headers: headers
            }
        ).subscribe(
            (data: any) => {
                this.setMapState(data);
            }, (err: HttpErrorResponse) => {
                console.error(err);
            });
    }

    setMapState(nextState: MapDetails): void {
        this.currentMapState = nextState;
        this.activeMapStateSubject.next(nextState);
    }

}
