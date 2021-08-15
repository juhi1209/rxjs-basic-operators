import { of, range } from 'rxjs';


const observer = {
    next: val => console.log('next of', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete!')
}

//creating iterators



const source$ = of(1, 2, 3, 4, 5); // emits data sychronously, behind runs a loop to array. no flattening done
const source2$ = range(1, 5);
const source3$ = of("Hello");
const source4$ = of(fetch('https://api.github.com/users/octocat'));


source$.subscribe(observer); // event listener is not listening untill we subscribe
source2$.subscribe(observer);
source3$.subscribe(observer);
source4$.subscribe(observer);