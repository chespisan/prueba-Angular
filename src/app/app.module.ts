import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";



import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { ExampleComponent } from "./example/example.component";
import { ChallengeComponent } from "./challenge/challenge.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: "", redirectTo: "/example", pathMatch: "full" },
  {
    path: "example",
    component: ExampleComponent
  },
  {
    path: "challenge",
    component: ChallengeComponent
  }
];

@NgModule({
  declarations: [AppComponent, ExampleComponent, ChallengeComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
