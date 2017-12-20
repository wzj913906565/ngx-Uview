import { NgModule ,ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MdIconModule,MdIconRegistry } from '@angular2-mat'
import {ButtonComponent} from './button/button.component';
import { ButtonModule } from './button/button.module';

export { ButtonModule } from './button/button.module';

const IC_COMPONENTS=[
  ButtonComponent
]
@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[
    ...IC_COMPONENTS
  ],
  declarations: [
    ...IC_COMPONENTS
]
})
export class NgUvdreamModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgUvdreamModule,
      providers: [

      ],
    };
  }
}
