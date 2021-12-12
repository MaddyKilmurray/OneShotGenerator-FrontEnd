import { Injector, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { CharacterCreaterComponent } from './components/character-creater/character-creater.component';
import { CharacterDmComponent } from './components/character-dm/character-dm.component';
import { CharacterPlayerComponent } from './components/character-player/character-player.component';
import { DefaultComponent } from './components/default/default.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create',
    component: CharacterCreaterComponent,
    canActivate: [OktaAuthGuard],
    data: { onAuthRequired }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [OktaAuthGuard],
    data: { onAuthRequired }
  },
  {
    path: 'player',
    component: CharacterPlayerComponent,
    canActivate: [OktaAuthGuard],
    data: { onAuthRequired }
  },
  {
    path: 'gamemaster',
    component: CharacterDmComponent,
    canActivate: [OktaAuthGuard],
    data: { onAuthRequired }
  },
  // {
  //   path: '**',
  //   component: DefaultComponent
  // }
];

export function onAuthRequired(oktaAuth: OktaAuth, injector: Injector): void {
  const router = injector.get(Router);
  router.navigate(['/login']);
}
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
