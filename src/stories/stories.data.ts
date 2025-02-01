import { Story } from './domain/story';
import { storyReviewOverviewData } from '@story-review/story-reviews.data';
import { topicsData } from '@topics/topics.data';
export const storiesData: Story[] = [
  {
    id: 1,
    title: 'Story 1',
    humanBook: {
      id: 1,
      email: 'john.doe@example.com',
      fullName: 'John Doe',
      provider: 'google',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    storyReview: storyReviewOverviewData,
    isFavorited: true,
    cover: {
      id: '1',
      path: 'https://example.com/cover.jpg',
    },
    topics: topicsData,
  },
];
