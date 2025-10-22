import { HomeComponent } from './pages/home/home';
import { ProductsComponent } from './pages/products/products';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';

export const routes = [
  { path: '', component: HomeComponent }, // ✅ default page
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
