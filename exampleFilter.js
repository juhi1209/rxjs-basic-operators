import { fromEvent } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';

const keyUp$ = fromEvent(document, 'keyup');

const code$ = keyUp$.pipe(
    // map(event => event.code) 
    pluck('code')
);

const enter$ = code$.pipe(
    filter(code => code === 'Enter')
);

enter$.subscribe(console.log);