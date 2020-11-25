import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab1PageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { ImageVideoCardComponent } from '../image-video-card/image-video-card.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [HomePage,
  ImageVideoCardComponent]
})
export class HomePageModule {}
