import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Place } from '../../models/place';

import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class PlacesService {

  constructor(private http: Http) { }

  getPlaces() {
    return this.http.get("/api/places").map((response) => {
      
      const places = response.json();
      let transformedPlaces: Place[] = [];

      for (let place of places) {
        transformedPlaces.push(new Place(place._id, place.name, place.imageUrl, place.description));
      }

      return transformedPlaces;
  })
  }

}
