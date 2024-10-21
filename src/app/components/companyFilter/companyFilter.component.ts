import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Images {
  id: number;
  name: string;
  src: string;
}

interface Videos {
  id: number;
  name: string;
  src: string;
}

interface CompanyData{
  img: Images[]
}

@Component({
  selector: 'app-companyFilter',
  templateUrl: './companyFilter.component.html',
  styleUrls: ['./companyFilter.component.scss']
})
export class CompanyFilterComponent implements OnInit {

  urlData: string = '/assets/data/companyData.json';

  img: Images[] = [];

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.fetchData();
  }
  
  fetchData(): void {
    this.http.get<CompanyData>(this.urlData).subscribe((data) => {
      this.img = data.img;
    });
  }
}
