import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CategoriesGigantComponent } from './categories-gigant/categories-gigant.component';
import { ValuesAndBlogComponent } from './values-and-blog/values-and-blog.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,
    IndexComponent,
    NavbarComponentComponent,
    ListProductsComponent,
    CategoriesGigantComponent,
    ValuesAndBlogComponent,
    ReviewsComponent,
    FooterComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'FashionStore';
}
