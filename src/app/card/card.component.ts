import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  showCard:boolean = false

  @Input()
  cardTitle: string = ""

  @Input()
  cardName: string = ""
  @Input()
  cardPassword: string = ""


  toggleShowCard(){
    this.showCard = !this.showCard
  }
}
