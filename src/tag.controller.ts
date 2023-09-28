import { Controller, Get } from '@nestjs/common';
import { TagService } from '@app/tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Get()
  getAll(): string[] {
    return this.tagService.getAll();
  }
}
