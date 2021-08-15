import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, take, first, mergeMap} from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const cords$ = click$.pipe(
    map(event=> ({
        x: event.clientX,
        y: event.clientY
    }))
);

const cordsWithSave$ = cords$.pipe(
    mergeMap(cords => ajax.post('https://www.mocky.io/v2/5185415ba171ea3a00704eed', cords)

    )
).subscribe(data => console.log(data.response));