import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class SubcriptionService {
  userData$ = new BehaviorSubject<User>(new User());
  searchItemValue$ = new BehaviorSubject<string>('');
}
