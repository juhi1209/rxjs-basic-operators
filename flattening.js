import { fromEvent, interval } from "rxjs";
import { debounceTime, map, mergeAll, mergeMap, switchMap, takeUntil } from "rxjs/operators";
import {ajax} from "rxjs/ajax"


const input = document.getElementById('text-input');

const input$ = fromEvent(input, 'keyup');

input$.pipe(
   //merge map subscribes internally if the value returned is observable
    mergeMap(event=>{ 
        const val = event.target.value;
        return ajax.getJSON(`https://api.github.com/users/${val}`)
    }),
    debounceTime(2000),
).subscribe(console.log); 

// mergemap

// const intervals$ = interval(1000);
// const click$ = fromEvent(document,'click');

// click$.pipe(
   
//     mergeMap(()=> intervals$.pipe( takeUntil(input$))) // finite life to inner observable
// ).subscribe(console.log);

// swtichMap

const intervals$ = interval(1000);
const click$ = fromEvent(document,'click');

click$.pipe(
   
    switchMap(()=> intervals$) // finite life to inner observable
).subscribe(console.log);
