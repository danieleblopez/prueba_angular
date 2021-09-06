import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  jsonItems: any;

  constructor(private http: Http) { }

  ngOnInit(): void {
    this.http.get('../../assets/data.json').subscribe((data) => {
      this.jsonItems = JSON.parse(data.text());
      for(let i = 0; i < this.jsonItems.length; i++) {
        console.log(this.jsonItems[i].email)
      }
    });
  }

}
