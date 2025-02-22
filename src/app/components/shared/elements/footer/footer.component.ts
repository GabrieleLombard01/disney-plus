import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Links {
  value: string;
}
interface FooterData {
  paragraph: string;
  links: Links[];
  disneyRights: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  siteName: string = ' Disney +';

  siteLink: string = 'https://www.disneyplus.com/'
  
  data: FooterData | undefined;

  urlData: string = '/assets/data/footerData.json';

  logo: string = "assets/images/shared/disneylogo.png";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<FooterData>(this.urlData).subscribe((data) => {
      this.data = data;
    });
  }
  

}
