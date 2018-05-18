import {Component} from "@angular/core";
import {HttpModule} from "@angular/http";
import {HttpClient, HttpClientModule, HttpHeaderResponse, HttpHeaders} from "@angular/common/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    constructor(private _http: HttpClient) {

    }

    onClick() {
        const headers = new HttpHeaders();
        headers.append('Content-type', 'application/json')
        this._http.get('https://jsonplaceholder.typicode.com/users', {headers}).subscribe(
            (res) => {
                console.log(res);
            },
            (err) => console.log(`${err}`)
        );
    }
}