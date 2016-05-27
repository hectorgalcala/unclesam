import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SingleAnnualRateService } from './single-annual-rate.service';

describe('Rate Service', () => {
  beforeEachProviders(() => [SingleAnnualRateService]);

  it('should ...',
      inject([SingleAnnualRateService], (service: SingleAnnualRateService) => {
    expect(service).toBeTruthy();
  }));
});
