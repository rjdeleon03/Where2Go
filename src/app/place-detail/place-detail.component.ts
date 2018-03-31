import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  place = {};
  
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getPlaceDetail(this.route.snapshot.params["id"]);
  }

  getPlaceDetail(id) {
    console.log(id);
    this.http.get("/api/places/" + id).subscribe(
      data => {
        this.place = data;
      }
    );
  }

}
