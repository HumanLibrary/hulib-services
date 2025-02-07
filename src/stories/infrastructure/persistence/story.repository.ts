import { DeepPartial } from '@utils/types/deep-partial.type';
import { NullableType } from '@utils/types/nullable.type';
import { IPaginationOptions } from '@utils/types/pagination-options';
import { Story } from '@stories/domain/story';
import { SortStoryDto } from '@stories/dto/find-all-stories.dto';

export abstract class StoryRepository {
  abstract create(
    data: Omit<Story, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Story>;

  abstract findAllWithPagination({
    paginationOptions,
    sortOptions,
  }: {
    paginationOptions: IPaginationOptions;
    sortOptions?: SortStoryDto[] | null;
  }): Promise<Story[]>;

  abstract findById(id: Story['id']): Promise<NullableType<Story>>;

  abstract update(
    id: Story['id'],
    payload: DeepPartial<Story>,
  ): Promise<Story | null>;

  abstract remove(id: Story['id']): Promise<void>;
}
