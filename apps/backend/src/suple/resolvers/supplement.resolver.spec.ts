import { Test, TestingModule } from '@nestjs/testing';
import { SupplementResolver } from './supplement.resolver';
import { Neo4jService } from 'nest-neo4j/dist';
import { Supplement } from '../types/supplement';

const result = {
  records: [{
    get: (key: string): { properties: Supplement } => {
      return {
        properties: {
          _id: null,
          name: 'test',
          description: 'test'
        }
      };
    }
  }],
  summary: undefined
};

const mockNeo4jService = {
  read: (cypher: string, params?: Record<string, any>): Promise<unknown> => {
    return new Promise((rs, rj) => rs(result));
  },
  write: (cypher: string, params?: Record<string, any>): Promise<unknown> => {
    return new Promise((rs, rj) => rs(result));
  }
};

describe('SupplementResolver', () => {
  let resolver: SupplementResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SupplementResolver,
        {
          provide: Neo4jService,
          useValue: mockNeo4jService
        }
      ]
    }).compile();

    resolver = module.get<SupplementResolver>(SupplementResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should get 1 result from getAllSupplements()', async () => {
    const result = await resolver.getAllSupplements();
    expect(result.length).toBe(1);
  });

});
