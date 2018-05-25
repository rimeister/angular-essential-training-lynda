import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Importing functions, whereas before we imported class types
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule); // Returns an instance of platform object. Has method named bootstrap module
// Pass in AppModule type into the bootstrap module call

// Use `npm start` in command line to start application