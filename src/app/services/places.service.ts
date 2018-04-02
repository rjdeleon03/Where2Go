import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
    .catch((error: Response) => { return Observable.throw(error.json())});
  }

  getPlace(id) {
    // return this.http.get("/api/places/" + id).map(())
    return this.http.get("/api/places/" + id).map((response: Response) => {

      const place = response.json();
      return new Place(place._id, place.name, place.imageUrl, place.description);
    })
    .catch((error: Response) => { return Observable.throw(error.json())});
  }

}
