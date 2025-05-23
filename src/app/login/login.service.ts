import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user$: BehaviorSubject<{ username: string; password: string } | null> =
    new BehaviorSubject<{ username: string; password: string } | null>(null);

  constructor() {}

  login(username: string, password: string): boolean {
    if (username && password) {
      console.log('ujkhk');

      this.user$.next({ username, password });
    }
    return false;
  }

  logout(): void {
    this.user$.next({ username: '', password: '' });
  }

  // isLoggedIn(): boolean {
  //   return (
  //     this.user$.getValue().username !== '' &&
  //     this.user$.getValue().password !== ''
  //   );
  // }
}
