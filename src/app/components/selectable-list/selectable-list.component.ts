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
}
