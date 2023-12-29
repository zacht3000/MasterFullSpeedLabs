import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterModule],
})


export class NavBarComponent {
  handleClick(event: Event) {
    // Puedes realizar alguna acción si es necesario
    console.log('Botón de Novedades clicado');
  }
}
