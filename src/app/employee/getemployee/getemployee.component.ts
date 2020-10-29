import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../../service/myservice.service';

@Component({
  selector: 'app-getemployee',
  templateUrl: './getemployee.component.html',
  styleUrls: ['./getemployee.component.css']
})
export class GetemployeeComponent implements OnInit {
  dataArray: any;
  constructor(
      private myserviceService: MyserviceService
  ) {
  }

  ngOnInit() {
    this.getEmpolyeedata();
  }

  getEmpolyeedata() {
      this.myserviceService.getData().subscribe(res => {
        this.dataArray = res;
        console.log(this.dataArray);
      });
  }

}
