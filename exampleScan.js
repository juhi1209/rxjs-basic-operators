import {from, interval} from 'rxjs';
import {pluck, scan, takeLast} from 'rxjs/operators';

// const numbers = [1,2,3,4,5];

// const totalReducer = (accumulator, currentValue) => {
//     console.log({accumulator,currentValue});
//     return accumulator + currentValue
// }

// from(numbers).pipe(
//     scan(totalReducer)
// ).subscribe(console.log);


// -------------------------------

const user = [
    { name: 'Brian', loggedIn: false, token: null },
    { name: 'Brian', loggedIn: true, token: 'abc' },
    { name: 'Brian', loggedIn: true, token: '123' }
  ];

  const state$ = from(user).pipe(
      scan( (accumulator, currentValue)=> { return {...accumulator, ...currentValue} })
  )

state$.pipe(
    pluck('name')
).subscribe(console.log)

