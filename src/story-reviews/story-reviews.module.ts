import { Module } from '@nestjs/common';
import { StoryReviewsService } from './story-reviews.service';
import { StoryReviewsController } from './story-reviews.controller';

@Module({
  controllers: [StoryReviewsController],
  providers: [StoryReviewsService],
})
export class StoryReviewsModule {}
