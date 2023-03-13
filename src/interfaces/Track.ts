export interface AddedBy {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    type:          AddedByType;
    uri:           string;
    name?:         string;
}

export interface ExternalUrls {
    spotify: string;
}

export enum AddedByType {
    Artist = "artist",
    User = "user",
}

export interface Track {
    album:             Album;
    artists:           AddedBy[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    episode:           boolean;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     ExternalUrls;
    href:              string;
    id:                string;
    is_local:          boolean;
    name:              string;
    popularity:        number;
    preview_url:       null | string;
    track:             boolean;
    track_number:      number;
    type:              TrackType;
    uri:               string;
}

export interface Album {
    album_group:            AlbumGroup;
    album_type:             AlbumGroup;
    artists:                AddedBy[];
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    is_playable:            boolean;
    name:                   string;
    release_date:           string;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumGroup;
    uri:                    string;
}

export enum AlbumGroup {
    Album = "album",
    Single = "single",
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export enum ReleaseDatePrecision {
    Day = "day",
}

export interface ExternalIDS {
    isrc: string;
}

export enum TrackType {
    Track = "track",
}

export interface VideoThumbnail {
    url: null;
}
