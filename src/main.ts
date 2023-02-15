import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

//Root Module Details provide here to let our angular this is our root module
platformBrowserDynamic().bootstrapModule(AppModule)



console.log("-------------------Main ts file got executed--------------------------------------------------------------");