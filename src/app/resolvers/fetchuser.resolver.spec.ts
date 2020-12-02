import { TestBed } from '@angular/core/testing';

import { FetchuserResolver } from './fetchuser.resolver';

describe('FetchuserResolver', () => {
  let resolver: FetchuserResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FetchuserResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
