
export type Language = 'sq' | 'en' | 'de';

export interface GalleryImage {
  url: string;
  category: string;
  id: string;
}

export interface Room {
  id: string;
  title: Record<Language, string>;
  beds: Record<Language, string>;
  size: string;
  amenities: string[];
  maxPeople: number;
  basePrice: number;
  images: string[];
  left: number;
}
