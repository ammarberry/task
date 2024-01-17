import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  [x: string]: any;
  checked: boolean= true
  customers: any[]=[{name:"dddd" , ticket:"C1", price:"20$" , cinema:"suncity" , persons:1 , buytime:"1 time"},
  {name:"ammar" , ticket:"C2", price:"20$" , cinema:"suncity", persons:1, buytime:"1 time"},
  {name:"ahmed" , ticket:"C3", price:"20$", cinema:"egyptmall", persons:1, buytime:"1 time"},
  {name:"omar" , ticket:"C4", price:"20$", cinema:"citystars", persons:1, buytime:"1 time"},
  {name:"zeyad" , ticket:"C5", price:"20$", cinema:"suncity", persons:1, buytime:"1 time"},
  {name:"mostafa" , ticket:"C6", price:"20$", cinema:"suncity", persons:1, buytime:"1 time"},
  {name:"ibrahim" , ticket:"C7", price:"20$", cinema:"suncity", persons:1, buytime:"1 time"},
  {name:"othman" , ticket:"C8", price:"20$", cinema:"suncity", persons:1, buytime:"1 time"},
  {name:"nader" , ticket:"C9", price:"20$", cinema:"suncity", persons:1, buytime:"1 time"},
  {name:"dddd" , ticket:"C10", price:"20$", cinema:"suncity", persons:1, buytime:"1 time"},
  {name:"dddd" , ticket:"C11", price:"20$", cinema:"suncity", persons:1, buytime:"1 time"},
  {name:"dddd" , ticket:"C12", price:"20$", cinema:"suncity", persons:1, buytime:"1 time" },];
value: any;
  
  



}
