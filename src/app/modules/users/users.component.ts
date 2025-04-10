import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: string[] = ["Alan", "Lorenzo", "Mirco", "Mateo", "Lio"];
  cursos: string[] = ["Angular", "React.js", "Javascript"]

  onSelectUser(user: string): void{
    console.log("Se selecciono un items " + user)
  }
}
