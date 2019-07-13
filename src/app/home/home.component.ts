import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import sampleData from './../../assets/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
/*
  products = [];
  fetchData = function() {
    this.http.get("http://localhost:5555/produces").subscibe(
      /*(res: Response)=> { 
        this.products = res.json();
      }
      */
     /*
     (response) =>{
       console.log(response);
     }
    );
  }
*/
  ngOnInit() {
   // this.fetchData();
  }

  Porducts: any = sampleData;
}
