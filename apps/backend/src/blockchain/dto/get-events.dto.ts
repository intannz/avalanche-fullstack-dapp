import { ApiProperty } from '@nestjs/swagger';

export class GetEventsDto {
  @ApiProperty({
    description: 'The starting block number to fetch events from.',
    example: 50613000,
  })
  fromBlock: number;

  @ApiProperty({
    description: 'The ending block number, max range is 2048 blocks.',
    example: 50613468,
  })
  toBlock: number;
}
