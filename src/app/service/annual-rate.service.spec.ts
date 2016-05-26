import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { RateService } from './annual-rate.service';

describe('Rate Service', () => {
  beforeEachProviders(() => [RateService]);

  it('should ...',
      inject([RateService], (service: RateService) => {
    expect(service).toBeTruthy();
  }));
});
