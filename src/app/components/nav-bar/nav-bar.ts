// import { Component } from "@angular/core";


// @Component({
//     selector: 'nav-bar',
//     template: `
//     <div matBadge="1" matBadgeSize="large" class="demo-section">Text with large badge</div>
//     `
// })

// export class NavBar{

//     constructor(){
//         console.log("Componente Navbar cargado");
//     }
// }

import {Component} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

/**
 * @title Badge overview
 */
@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.html',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterModule],
})
export class NavBar {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */