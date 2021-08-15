import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { NewuserComponent } from './newuser/newuser.component';
import { UserdataComponent } from './userdata/userdata.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostsComponent } from './posts/posts.component'
import { DatamediatorService } from './datamediator.service';

const appRoutes : Routes = [{path: "create", component : NewuserComponent},
                              {path: ":id", component : UserdataComponent}]

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    UsersComponent,
    UserComponent,
    NewuserComponent,
    UserdataComponent,
    TasksComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DatamediatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
