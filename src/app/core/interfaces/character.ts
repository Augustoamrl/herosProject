import { EventList } from "./event-list";
import { SeriesList } from "./series-list";

export interface Character {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    events: EventList;
    series: SeriesList;
}