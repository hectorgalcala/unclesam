import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MarriedAnnualRateService } from './married-annual-rate.service';

describe('MarriedAnnualRate Service', () => {
  beforeEachProviders(() => [MarriedAnnualRateService]);

  it('should ...',
      inject([MarriedAnnualRateService], (service: MarriedAnnualRateService) => {
    expect(service).toBeTruthy();
  }));
});
