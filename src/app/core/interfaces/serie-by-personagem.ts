import { Thumbnail } from "./thumbnail";

export interface SerieByPersonagem {
    id: number;
    title: string;
    description: string | null;
    resourceURI: string;
    startYear: number;
    endYear: number;
    rating: string;
    type: string;
    modified: string;
    thumbnail: Thumbnail
  }
