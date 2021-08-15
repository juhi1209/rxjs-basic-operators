import {fromEvent, interval} from 'rxjs';
import {exhaustMap,mergeMap,switchMap,take} from 'rxjs/operators'

const click$ = fromEvent(document, 'click');

click$.pipe(
   mergeMap(()=>interval(1000).pipe(take(3))) 
).subscribe(console.log);