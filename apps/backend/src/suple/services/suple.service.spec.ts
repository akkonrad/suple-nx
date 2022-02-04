import { Test, TestingModule } from '@nestjs/testing';
import { SupleService } from './suple.service';

describe('SupleService', () => {
  let service: SupleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupleService],
    }).compile();

    service = module.get<SupleService>(SupleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
