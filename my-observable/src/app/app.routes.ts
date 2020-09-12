import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './mission/mission.component';

export const routes : Routes = [ 
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, 
            children: [
                { path: 'mission', component: MissionComponent }
            ]},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
export const childRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);