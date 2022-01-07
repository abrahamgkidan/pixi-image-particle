import { AfterViewInit, Component, ElementRef, NgZone } from '@angular/core';

import { ImageParticleSystem, IMAGE_URL } from './image-particle-system';

@Component({
  selector: 'pixi-image-particle',
  template: `
    <canvas id='viewport'></canvas>
  `,
  styles: [
    `

      h1 {
        font-family: Lato;
      }

      #viewport {
        position: absolute;
        left: 50%;
        top: 50%;
      }
    `,
  ],
})
export class PixiImageParticleComponent implements AfterViewInit {
  public boxSize: number = 3;
  constructor(public elRef: ElementRef, private zone: NgZone) {
    // The application will create a canvas element for you that you
    // can then insert into the DOM.
    // console.log(PIXI.VERSION);
    
  }

  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular((): void => {
      // ==================================================
      // Main
      // ==================================================
      const imageParticleSystem = new ImageParticleSystem();
      imageParticleSystem.setup();
      imageParticleSystem.changeImage(IMAGE_URL);
    });
  }
}
