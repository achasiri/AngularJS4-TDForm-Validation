


import {BrowserModule} from '@angular/platform-browser' // to provide essential service to run app
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms' // will active template driven
import {AppComponent} from './app.component'; // importing root component
@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent], // declaring AppComponent to run component.
  bootstrap: [ AppComponent ]
})
export class AppModule {}
