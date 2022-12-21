import { Test, TestingModule } from '@nestjs/testing';
import { TissueService } from './tissue.service';

describe('TissueService', () => {
  let service: TissueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TissueService],
    }).compile();

    service = module.get<TissueService>(TissueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
