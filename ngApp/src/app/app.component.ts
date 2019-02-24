import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private myVar: String;

  constructor(private newService: CommonService) { }

  ngOnInit() {
    this.getMessage();
  }

  public getMessage = () => {
    this.newService.getMessage().subscribe(Response => {
      this.myVar = Response.message;
    }, err => {
      console.log("No Success",err);
    });
  }
}
