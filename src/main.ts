import { provideRouter } from "@angular/router";
import routeConfig from "./app/app.routes";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { error } from "console";

bootstrapApplication(AppComponent, {providers:[provideRouter(routeConfig)]}).catch((error)=> console.log(error));