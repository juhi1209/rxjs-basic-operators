import { interval, timer } from 'rxjs';

// const timer$ = interval(1000);

const timer$ = timer(4000, 1000);
//timer$.subscribe(console.log);