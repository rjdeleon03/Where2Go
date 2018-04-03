import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PlacesService } from '../services/places.service';
import { Place } from '../../models/place';

@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.css']
})
export class PlaceEditComponent implements OnInit {

  place = new Place();

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private placeService: PlacesService) { }

  ngOnInit() {
    this.getPlace(this.route.snapshot.params["id"])
  }

  getPlace(id) {
    // this.http.get("/api/places/" + id).subscribe(
    //   data => {
    //     this.place = data;
    //   }
    // );
    this.placeService.getPlace(id).subscribe(response => {
      this.place = response;
    });
  }

  updatePlace(id) {
    this.placeService.editPlace(id, this.place).subscribe(response => {
      console.log(response._id);
      // Get ID from JSON
      let id = response["_id"];

      // Navigate to places/:id
      this.router.navigate(["/places", id]);
    }, err => {
      console.log(err);
    });
  }

}
