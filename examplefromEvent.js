import { fromEvent } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete!')
}
const source$ = fromEvent(document, 'click'); // behind the scene it will add event listener

const sub1 = source$.subscribe(observer); // event listener is not listening untill we subscribe
const sub2 = source$.subscribe(observer);

setTimeout(() => {
    console.log('unbscribing');
    sub2.unsubscribe();
}, 3000)