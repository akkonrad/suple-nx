import { Test, TestingModule } from '@nestjs/testing';
import { SupplementResolver } from './supplement.resolver';

describe('SupplementResolver', () => {
  let resolver: SupplementResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplementResolver],
    }).compile();

    resolver = module.get<SupplementResolver>(SupplementResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
