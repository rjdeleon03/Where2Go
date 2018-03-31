import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  places: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("/api/places").subscribe(data => {
      this.places = data;
    });
  }

}
