// Generated by https://quicktype.io

export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    Properties;
    text_en:       string;
    language_en?:  Language;
    place_name_en: string;
    text:          string;
    language?:     Language;
    place_name:    string;
    center:        number[];
    geometry:      Geometry;
    context:       Context[];
}

export interface Context {
    id:           string;
    mapbox_id:    string;
    text_en:      string;
    text:         string;
    wikidata?:    string;
    language_en?: Language;
    language?:    Language;
    short_code?:  ShortCode;
}

export enum Language {
    En = "en",
}

export enum ShortCode {
    Pl = "pl",
    Pl10 = "PL-10",
    Pl14 = "PL-14",
}

export interface Geometry {
    coordinates: number[];
    type:        string;
}

export interface Properties {
    wikidata?:  string;
    category:   string;
    landmark:   boolean;
    address:    string;
    foursquare: string;
}