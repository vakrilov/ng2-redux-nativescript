import { Component } from "@angular/core";
import { NgRedux, select, DevToolsExtension } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { CounterActions } from './actions/counter.actions';
import { RandomNumberService } from './services/random-number.service';
import { IAppState, rootReducer, enhancers } from './store/index';

// const createLogger = require('redux-logger');

@Component({
  selector: "my-app",
  template: `
    <StackLayout>
      <button (tap)="actions.increment()" text="+++"></button>
      <Label [text]="counter$ | async" textWrap="true"></Label>
      <button (tap)="actions.decrement()" text="---"></button>
      <button (tap)="actions.randomize()" text="rand"></button>
    </StackLayout>
    `
})
export class AppComponent {
  @select('counter') counter$: Observable<number>;


  constructor(
    private ngRedux: NgRedux<IAppState>,
    // private devTool: DevToolsExtension,
    public actions: CounterActions) {

    this.ngRedux.configureStore(
      rootReducer,
      {},
      [],
      [...enhancers]);
  }

}
