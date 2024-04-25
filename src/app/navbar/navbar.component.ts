import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {
  @Output() switchComponent=new EventEmitter<string>();
  
  switchToComponent(component:any){
  this.switchComponent.emit(component);
}
}
