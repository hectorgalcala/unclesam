import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FlSamAppComponent } from '../app/fl-sam.component';

beforeEachProviders(() => [FlSamAppComponent]);

describe('App: FlSam', () => {
  it('should create the app',
      inject([FlSamAppComponent], (app: FlSamAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fl-sam works!\'',
      inject([FlSamAppComponent], (app: FlSamAppComponent) => {
    expect(app.title).toEqual('fl-sam works!');
  }));
});
