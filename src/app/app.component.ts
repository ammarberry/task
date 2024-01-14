import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-task';


  customers: any[]=[{name:"ssss" , country:"ffff" , company:"ffgggr" , id:"33"},
  {name:"ssss" , country:"ffff" , company:"ffgggr" , id:"33"},
  {name:"ssss" , country:"ffff" , company:"ffgggr" , id:"33"},
  {name:"ssss" , country:"ffff" , company:"ffgggr" , id:"33"},
  {name:"ssss" , country:"ffff" , company:"ffgggr" , id:"33"},
  {name:"ssss" , country:"ffff" , company:"ffgggr" , id:"33"},
  {name:"ssss" , country:"ffff" , company:"ffgggr" , id:"33"},
  {name:"ssss" , country:"ffff" , company:"ffgggr" , id:"33"},
  {name:"ssss" , country:"ffff" , company:"ffgggr" , id:"33"},
  {name:"ssss" , country:"ffff" , company:"ffgggr" , id:"33"},
  {name:"ssss" , country:"ffff" , company:"ffgggr" , id:"33"}];

    constructor() {}

    ngOnInit() {
        
    }


}
