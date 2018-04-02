import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Place } from '../../models/place';

import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class PlacesService {

  constructor(private http: Http) { }

  addPlace(newPlace: Place) {
    const body = JSON.stringify(newPlace);
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    return this.http.post("/api/places", body, { headers: headers })
      .map((response: Response) => response.json());
  }

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

  deletePlace(id) {
    return this.http.delete("api/places/" + id).map((response: Response) => {
      console.log(response.json());
    })
    .catch((error: Response) => { return Observable.throw(error.json()) });
  }

}
