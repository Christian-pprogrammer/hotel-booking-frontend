import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';
import { CardComponent } from './components/card/card.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';

//angular material

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { AppRoutingModule } from './app-routing.module';
import { RoomsComponent } from './components/rooms/rooms.component';
import { HallsComponent } from './components/halls/halls.component';
import { ModalComponent } from './components/modal/modal.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { CreateHallComponent } from './components/create-hall/create-hall.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RoomCardComponent } from './components/room-card/room-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    CarouselHomeComponent,
    CardComponent,
    ServicesComponent,
    ContactUsComponent,
    FooterComponent,
    RoomsComponent,
    HallsComponent,
    ModalComponent,
    CreateRoomComponent,
    CreateHallComponent,
    OrdersComponent,
    RoomCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        authScheme: 'Bearer ',
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: ['localhost:5000/users/login', 'localhost:5000/users/signup']
      }
    })
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
