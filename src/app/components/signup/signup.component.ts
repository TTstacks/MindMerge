import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  readonly schools = ['NIS Aktau ChB', 'NIS Aktobe PhM', 'NIS Almaty ChB', 'NIS Almaty PhM', 'NIS Astana IB', 'NIS Astana PhM', 'NIS Karaganda ChB', 'NIS Kokshetau PhM', 'NIS Kostanai PhM', 'NIS Kyzylorda ChB', 'NIS Oskemen ChB', 'NIS Pavlodar ChBNIS Atyrau ChB', 'NIS Petropavlovsk ChB', 'NIS Semey PhM', 'NIS Shymkent ChB', 'NIS Shymkent PhM', 'NIS Taldykorgan PhM', 'NIS Taraz PhM', 'NIS Turkestan ChB', 'NIS Uralsk PhM'];
  isOpen = false;
  inputName = viewChild<ElementRef>('check')
  
  @HostListener('click', ['$event.target']) onClick(e: any){
    
  }

  onPressed(){
    this.isOpen = !this.isOpen;
  }
  onPicked(schoolName: string){
    
  }

}
