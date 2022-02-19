import { RoomsService } from './../../services/rooms.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private roomsService: RoomsService) { }
  rooms: any;
  ngOnInit(): void {
    this.roomsService.getRooms()
      .subscribe((res: any)=>{
        this.rooms = res.rooms;
      })
  }

}
