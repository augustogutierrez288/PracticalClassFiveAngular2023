import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selectable-list',
  standalone: false,
  templateUrl: './selectable-list.component.html',
  styleUrl: './selectable-list.component.scss'
})
export class SelectableListComponent {
  @Input() items: string[] = [];

  @Output() 
  onSelect = new EventEmitter();

  @Output()
  itemsChange = new EventEmitter();

  removeItem(index: number): void{
    //this.items = this.items.filter((_ , i) => i !== index);

    this.itemsChange.emit(this.items.filter((_ , i) => i !== index))
  }
}
