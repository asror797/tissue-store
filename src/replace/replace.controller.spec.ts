import { Test, TestingModule } from '@nestjs/testing';
import { ReplaceController } from './replace.controller';
import { ReplaceService } from './replace.service';

describe('ReplaceController', () => {
  let controller: ReplaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReplaceController],
      providers: [ReplaceService],
    }).compile();

    controller = module.get<ReplaceController>(ReplaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
