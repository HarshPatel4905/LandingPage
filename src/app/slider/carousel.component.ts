import { Power1 } from 'gsap';
import {gsap} from 'gsap'
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],

})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Hello in script')
    var i =0;
    var list=['section1','section2','section3']
    setInterval(() => {
      for (let index = 0; index < 3; index++) {
        if(i==index){
          var element=document.getElementById(list[index]);

          i++;
          console.log(element?.style.display.valueOf);

          element!.style.display='none';
          break;
        }

      } 
      if(i==3){
        document.getElementById(list[0])!.removeAttribute("style");  
        document.getElementById(list[1])!.removeAttribute("style");  
        document.getElementById(list[2])!.removeAttribute("style"); 
        i=0;
      }
      
    }, 2000);
  }

}
