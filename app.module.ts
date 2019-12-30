import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";

let rules =[
    {path:"home",component:HomeComponent},
    {path:"contact",component:ContactComponent},
    {path:"about",component:AboutComponent},
];

@NgModule({
    imports: [BrowserModule,StudentModule,UserModule,FormsModule,RouterModule.forRoot(rules),RouterModule],
    declarations: [AppComponent,HomeComponent,ContactComponent,AboutComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
