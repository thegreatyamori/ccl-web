/**
 * Service code provided by: https://github.com/blove
 * https://brianflove.com/2016/10/10/angular-2-navigator-scroll-event-using-hostlistener/
 */

import { isPlatformBrowser } from '@angular/common';
import { ClassProvider, FactoryProvider, InjectionToken, PLATFORM_ID, Injectable } from '@angular/core';

/* Create a new injection token for injecting the navigator into a component. */
export const NAVIGATOR = new InjectionToken('NavigatorToken');

/* Define abstract class for obtaining reference to the global navigator object. */
export abstract class NavigatorRef {
  get nativeNavigator(): Navigator | Object {
    throw new Error('Not implemented.');
  }
}

/* Define class that implements the abstract class and returns the native navigator object. */
@Injectable()
export class BrowserNavigatorRef extends NavigatorRef {
  constructor() {
    super();
  }

  get nativeNavigator(): Navigator | Object {
    return navigator;
  }
}

/* Create an factory function that returns the native navigator object. */
export function navigatorFactory(browserNavigatorRef: BrowserNavigatorRef, platformId: Object): Navigator | Object {
  if (isPlatformBrowser(platformId)) {
    return browserNavigatorRef.nativeNavigator;
  }
  return new Object();
}

/* Create a injectable provider for the NavigatorRef token that uses the BrowserNavigatorRef class. */
export const browserNavigatorProvider: ClassProvider = {
  provide: NavigatorRef,
  useClass: BrowserNavigatorRef,
};

/* Create an injectable provider that uses the navigatorFactory function for returning the native navigator object. */
export const NavigatorProvider: FactoryProvider = {
  provide: NAVIGATOR,
  useFactory: navigatorFactory,
  deps: [NavigatorRef, PLATFORM_ID],
};

/* Create an array of providers. */
export const NAVIGATOR_PROVIDERS = [browserNavigatorProvider, NavigatorProvider];
