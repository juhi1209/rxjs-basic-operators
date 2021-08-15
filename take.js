import { fromEvent } from 'rxjs';
import { map, take, first} from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
// click$.pipe(
//     take(1),
//     map(event=> ({
//         x: event.clientX,
//         y: event.clientY
//     }))
// ).subscribe(console.log);

click$.pipe(
   
    map(event=> ({
        x: event.clientX,
        y: event.clientY
    })),
    first(({y}) => y>200)
).subscribe(console.log);