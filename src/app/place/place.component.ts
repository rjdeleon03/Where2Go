import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlacesService } from '../services/places.service';
import { Place } from '../../models/place';

// import * as $ from 'jquery';

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
    });

    /*
    // jQuery
    $(document).ready(function() {    

      $(".place-div").each(function() {
        $(this).css("opacity", "0");
        if ($(this).offset().top < $(window).scrollTop() + $(window).innerHeight()) {
          $(this).animate({              
            opacity: 1.0
          }, 500);
        }
      });

      $(window).scroll(function() {
        $(".place-div").each(function() {
          if ($(this).offset().top >= $(window).scrollTop() + $(window).innerHeight()) {
            console.log($(this).offset().top + " --- " + ($(window).scrollTop() + $(window).innerHeight()));
            $(this).animate({              
              opacity: 1.0
            }, 500);
          }   
        })
      });
    });
    */
  }
}
