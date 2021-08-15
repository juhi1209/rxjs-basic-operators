import { of, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// of(1, 2, 3, 4, 5).pipe(
//     map(x => x * 10)
// ).subscribe(console.log);

const keyUp$ = fromEvent(document, 'keyup');
const keyCode$ = keyUp$.pipe(
    pluck('code')
);
keyCode$.subscribe(console.log);

// without pluck
const click$ = fromEvent(document, 'click');
click$.pipe(
    map(event => event.clientX)
).subscribe(console.log);

const pressed$ = keyUp$.pipe(
    mapTo('KeyPressed')
)

pressed$.subscribe(console.log);

