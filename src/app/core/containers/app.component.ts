import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//import { AuthActions } from 'src/app/auth/actions';
import * as fromAuth from 'src/app/auth/reducers';
import * as fromRoot from 'src/app/store';


@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'melangefr';

  //showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State & fromAuth.State>) {
  //  this.showSidenav$ = this.store.select(fromRoot.selectShowSidenav);
    this.loggedIn$ = this.store.select(fromAuth.selectLoggedIn);
  }
  
}
