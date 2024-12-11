import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface NavLink {
  title: string;
  icon: string;
  path: string;
}

interface HeaderData {
  altLogo: string;
  logo: string;
  navLinks: NavLink[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  data: HeaderData | undefined;

  urlData: string = '/assets/data/headerData.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<HeaderData>(this.urlData).subscribe((data) => {
      this.data = data;
    });
  }
}
