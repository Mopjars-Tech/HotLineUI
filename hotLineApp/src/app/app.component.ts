import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotLineApp';

	constructor(private http: HttpClient) {}

  
  
	ngOnInit() {
		let headers = new HttpHeaders({
			'x-rapidapi-host': environment.apiHost,
			'x-rapidapi-key': environment.apiKey,
		});
		this.http
			.get<any>('https://weatherapi-com.p.rapidapi.com/current.json?q=%3CREQUIRED%3E', {
        params: {q: 'London'},
        headers: headers
			})
			.subscribe(data => {
				console.log(data);
			});
	}

}
