import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { FederalWithholdingService } from './federal-withholding.service';

describe('FederalWithholding Service', () => {
  beforeEachProviders(() => [FederalWithholdingService]);

  it('should ...',
      inject([FederalWithholdingService], (service: FederalWithholdingService) => {
    expect(service).toBeTruthy();
  }));
});
