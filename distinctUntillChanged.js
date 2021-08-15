import { of, from } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged, pluck, map } from 'rxjs/operators';

const number$ = of(1,2,2,2,3,3,4,4,3);

number$.pipe(
    distinctUntilChanged()
).subscribe(console.log);

const user = [
    { name: 'Brian', loggedIn: false, token: null },
    { name: 'Brian', loggedIn: true, token: 'abc' },
    { name: 'Brian', loggedIn: true, token: '123' }
  ];
  const state$ = from(user).pipe(
     // pluck("name"),
     // distinctUntilChanged()
      distinctUntilKeyChanged("name"),
    map(state=> state.name)
  ).subscribe(console.log)