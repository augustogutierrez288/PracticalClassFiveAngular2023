import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ComponentsModule } from '../../components/components.module';
import { SelectableListComponent } from '../../components/selectable-list/selectable-list.component';



@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { }
