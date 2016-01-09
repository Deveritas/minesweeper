import {Component} from 'angular2/core';
import * as Immutable from 'immutable';

@Component({
    selector: 'app',
    template: '<h1>Loaded</h1>'
})
export class App {
    game: Immutable.List<string>;

    constructor () {
        this.game = Immutable.List([]);
    }
}