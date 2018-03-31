import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { PlaceComponent } from './place/place.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceNewComponent } from './place-new/place-new.component';
import { PlaceEditComponent } from './place-edit/place-edit.component';

const appRoutes: Routes = [
  {
    path: "places/new",
    component: PlaceNewComponent,
    data: { title: "Add New Place"},
    pathMatch: "full"
  },
  {
    path: "places/:id/edit",
    component: PlaceEditComponent,
    data: { title: "Edit Place"},
  },
  {
    path: "places",
    component: PlaceComponent,
    data: { title: "Places" }
  },
  {
    path: "places/:id",
    component: PlaceDetailComponent,
    data: { title: "Book Details"}
  },
  {
    path: "",
    redirectTo: "/places",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    PlaceDetailComponent,
    PlaceNewComponent,
    PlaceEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
