import { HallsService } from './../../services/halls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.css']
})
export class HallsComponent implements OnInit {

  constructor(private hallsService: HallsService) { }

  ngOnInit(): void {
    
  }

}
