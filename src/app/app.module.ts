import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PixiImageParticleComponent } from './pixi.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PixiImageParticleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
