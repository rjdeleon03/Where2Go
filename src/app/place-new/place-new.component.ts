import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PlacesService } from '../services/places.service';
import { Place } from '../../models/place';

@Component({
  selector: 'app-place-new',
  templateUrl: './place-new.component.html',
  styleUrls: ['./place-new.component.css']
})
export class PlaceNewComponent implements OnInit {

  place = new Place();

  constructor(private http: HttpClient, private router: Router, private placeService: PlacesService) { }

  ngOnInit() {
  }

  savePlace() {
    this.placeService.addPlace(this.place).subscribe(
      res => {

        // When place has been added, redirect to place's page
        // Get _id field from response
        let id = res["_id"];
        this.router.navigate(["/places", id]);

      }, (err) => {
        console.log(err);
      }
    );
  }

}
