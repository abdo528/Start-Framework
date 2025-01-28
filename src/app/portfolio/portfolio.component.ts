import { Component } from '@angular/core';

@Component({
  selector: 'app-potfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PotfolioComponent {
  modelImage: string = ''
  layer: boolean = true
  items: string[] = [
    'images/poert1.png',
    'images/port2.png',
    'images/port3.png',
    'images/poert1.png',
    'images/port2.png',
    'images/port3.png',
  ]
  toogleLayer(): void {
    this.layer = false
  }

  stopProp(event: Event): void {
    event.stopPropagation()
  }

  index: number = 0
  nextImg(): void {
    this.index++
    if (this.index == this.items.length) this.index = 0 // this.index = this.index % this.items.length
    this.modelImage = this.items[this.index]
  }
  previousImg(): void {
    this.index--
    if (this.index < 0) this.index = this.items.length - 1
    this.modelImage = this.items[this.index]
  }
  closeImg(): void {
    this.layer = true
  }
}