import { Component } from '@angular/core';
import { NavbarComponentComponent } from '../navbar-component/navbar-component.component';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NavbarComponentComponent

  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
