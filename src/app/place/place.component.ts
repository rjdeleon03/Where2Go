import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlacesService } from '../services/places.service';
import { Place } from '../../models/place';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  places: any;

  constructor(private http: HttpClient, private placeService: PlacesService) { }

  ngOnInit() {    
    this.placeService.getPlaces().subscribe((places: Place[]) => {
      this.places = places;
    })
  }
}
