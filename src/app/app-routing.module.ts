import { AuthGuard } from './common/auth-guard';
import { OrdersComponent } from './components/orders/orders.component';
import { CreateHallComponent } from './components/create-hall/create-hall.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { HallsComponent } from './components/halls/halls.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'halls',
    component: HallsComponent
  },
  {
    path: 'create-room',
    component: CreateRoomComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-hall',
    component: CreateHallComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
