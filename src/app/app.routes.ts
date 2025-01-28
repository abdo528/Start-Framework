import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PotfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'about', component: AboutComponent, title: 'About' },
    { path: 'portfolio', component: PotfolioComponent, title: 'Portfolio' },
    { path: 'contact', component: ContactComponent, title: 'Contact' },
    { path: '**', component: NotfoundComponent, title: 'NotFound' }
];
