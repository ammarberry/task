import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  checked: boolean= true
  customers: any[]=[{name:"dddd" , ticket:"C1", price:"20$" , cinema:"suncity" , persons:1 , buytime:"1 time"},
  {name:"dddd" , ticket:"C2", price:"20$" , cinema:"suncity", persons:1},
  {name:"dddd" , ticket:"C3", price:"20$", cinema:"egyptmall", persons:1},
  {name:"dddd" , ticket:"C4", price:"20$", cinema:"citystars", persons:1},
  {name:"dddd" , ticket:"C5", price:"20$", cinema:"suncity", persons:1},
  {name:"dddd" , ticket:"C6", price:"20$", cinema:"suncity", persons:1},
  {name:"dddd" , ticket:"C7", price:"20$", cinema:"suncity", persons:1},
  {name:"dddd" , ticket:"C8", price:"20$", cinema:"suncity", persons:1},
  {name:"dddd" , ticket:"C9", price:"20$", cinema:"suncity", persons:1},
  {name:"dddd" , ticket:"C10", price:"20$", cinema:"suncity", persons:1},
  {name:"dddd" , ticket:"C11", price:"20$", cinema:"suncity", persons:1},
  {name:"dddd" , ticket:"C12", price:"20$", cinema:"suncity", persons:1},];
value: any;
  
}
