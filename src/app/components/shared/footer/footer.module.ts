import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { FooterComponent } from "./footer/footer.component";
import { MapComponent } from "./map/map.component";

@NgModule({
  declarations: [FooterComponent, MapComponent],
  imports: [CommonModule, FontAwesomeModule, NgbModule, RouterModule],
  exports: [FooterComponent, MapComponent]
})
export class FooterModule {}
