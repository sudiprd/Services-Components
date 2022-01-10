import { NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'
import { StudentService} from './service/student.service';
import { DataComponent } from './data/data.component'

@NgModule ({
    declarations: [
        AppComponent,
        DataComponent,

    ],
    imports: [
        BrowserModule
    ],
    providers : [StudentService],
    bootstrap: [AppComponent]
})
export class AppModule{

}