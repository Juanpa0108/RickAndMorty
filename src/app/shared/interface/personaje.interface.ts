interface RickAndMortyCharacterLocation { name: string; url: string };
export interface Personaje{
  id : number;
  name : string;
  image : string;
  species : string;
  gender : string;
  created : string;
  status : string;
  location : RickAndMortyCharacterLocation;
}
