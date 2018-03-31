import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-new',
  templateUrl: './place-new.component.html',
  styleUrls: ['./place-new.component.css']
})
export class PlaceNewComponent implements OnInit {

  place = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  savePlace() {
    this.http.post("/api/places", this.place).subscribe(
      res => {

        // When place has been added, redirect to place's page
        let id = res["_id"];
        this.router.navigate(["/places", id]);

      }, (err) => {
        console.log(err);
      }
    );
  }

}
