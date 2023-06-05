import { TeamInterface } from 'interfaces/team';

export interface EventInterface {
  id?: string;
  team_id: string;
  title: string;
  description: string;
  event_date: Date;
  event_time: Date;

  team?: TeamInterface;
  _count?: {};
}
