import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit  {

 
  
  value: any | undefined;



  ClipBoardCopy(input:any){
    input.select();
    document.execCommand('copy');
    input.setSelectRange(0,0);
  }
    
    
    ngOnInit(): void {
    
    }
  }




 




