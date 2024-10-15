import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navFooter',
  templateUrl: './navFooter.component.html',
  styleUrls: ['./navFooter.component.scss']
})
export class NavFooterComponent {

  data: any[] = [];

  dataUrl: string = '/assets/data/navFooterData.json'

  constructor(private http: HttpClient) { 
    this.fetchData()
  }

  fetchData() { 
    this.http.get<any[]>(this.dataUrl).subscribe(data => {
      this.data = data;
    });
  }

}
