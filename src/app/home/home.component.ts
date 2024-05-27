import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { OnInit ,OnChanges} from '@angular/core';
import { Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input() totalCounts:number = 0;
  countColor = "black";
  intervalId:any;
  

  onIncreseBtn() {
    if(this.totalCounts < 20){
      this.totalCounts++
    }
    
  }

  onDecreseBtn() {
    if(this.totalCounts > 0){
      this.totalCounts--
    }
    
  }

  onResetBtn() {
    this.totalCounts = 0;   
  }

ngOnInit(): void {
  if(this.totalCounts > 5){
    this.countColor = "green"
  }
  }
}
