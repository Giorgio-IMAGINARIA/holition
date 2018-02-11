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
interface DialogDetails {
    open: boolean,
    apiKey: string
}

@Injectable()
export class MapService {
    constructor(private http: HttpClient) { }

    private currentDialogState: DialogDetails = {
        open: false,
        apiKey: null
    };

    public activeDialogStateSubject: Subject<DialogDetails> = new Subject<DialogDetails>();
    public activeDialogStateObservable: Observable<DialogDetails> = this.activeDialogStateSubject.asObservable();



    requestData(): void {
        console.log('mensola');
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
                console.log('MapData: ', data);
                // this.setDialogState({
                //     open: true,
                //     apiKey: data.APIKey
                // });
            }, (err: HttpErrorResponse) => {
                console.error(err);
            });
    }

    setDialogState(nextState: DialogDetails): void {
        this.currentDialogState = nextState;
        this.activeDialogStateSubject.next(nextState);
    }

}
