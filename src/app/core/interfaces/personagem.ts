import { EventList } from "./event-list";
import { SeriesList } from "./series-list";
import { Thumbnail } from "./thumbnail";

export interface Personagem {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    thumbnail: Thumbnail;
    events: EventList;
    series: SeriesList;
}