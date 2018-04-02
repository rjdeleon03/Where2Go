import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PlacesService } from '../services/places.service';
import { Place } from '../../models/place';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  place = {};
  
  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private placeService: PlacesService, 
    private http: HttpClient) { }

  ngOnInit() {
    this.getPlaceDetail(this.route.snapshot.params["id"]);
  }

  getPlaceDetail(id) {
    this.placeService.getPlace(id).subscribe((place: Place) => {
      this.place = place;
    });
  }

  deletePlace(id) {
    this.http.delete("/api/places/" + id).subscribe(
      res => {
        this.router.navigate(["/places"]);
      }, err => {
        console.log(err);
      }
    );
  }

}
