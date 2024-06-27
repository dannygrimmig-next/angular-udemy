import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent], // components needed inside
  exports: [CardComponent], // modules made avaiable to any other module that imports this module
})
export class SharedModule {}
