import { beforeEachProviders, describe, expect, it, inject } from '@angular/core/testing';
import { HomeScreenComponent } from './home-screen.component';

beforeEachProviders(() => [HomeScreenComponent]);

describe('App: Uncle Samuel Adams', () => {
  it('should create the app',
      inject([HomeScreenComponent], (app: HomeScreenComponent) => {
    expect(app).toBeTruthy();
  }));

  // it('should have as title \'fl-sam works!\'',
  //     inject([HomeScreenComponent], (app: HomeScreenComponent) => {
  //   expect(app.title).toEqual('fl-sam works!');
  // }));
});
