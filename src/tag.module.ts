import { Module } from '@nestjs/common';
import { TagController } from '@app/tag.controller';
import { TagService } from '@app/tag.service';

@Module({
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
