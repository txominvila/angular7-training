import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterceptorRoutingModule } from './interceptor-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InterceptorRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class InterceptorModule { }
