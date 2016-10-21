// Patch to make redux load
global.process = { env: {} };

// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NgReduxModule } from 'ng2-redux';
import { CounterActions } from './actions/counter.actions';
import { RandomNumberService } from "./services/random-number.service";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NgReduxModule],
  providers: [
    CounterActions,
    RandomNumberService
  ]
})
class AppComponentModule { }

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);