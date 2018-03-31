import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.css']
})
export class PlaceEditComponent implements OnInit {

  place = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPlace(this.route.snapshot.params["id"])
  }

  getPlace(id) {
    this.http.get("/api/places/" + id).subscribe(
      data => {
        this.place = data;
      }
    );
  }

  updatePlace(id) {
    this.http.put("/api/places/" + id, this.place).subscribe(
      res => {
        let id = res["_id"];
        this.router.navigate(["/places", id]);
      }, err => {
        console.log(err);
      }
    );
  }

}
