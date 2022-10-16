import { Component } from '@angular/core';
import { Pokemon } from './models/Pokemon';
import { PokeServiceService } from './services/poke-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoPoke';
  

  pokemon: Pokemon;
  urlImage = "";
  urlImage2 = "";
  urlImage3 = "";

  constructor(
    private pokeService: PokeServiceService
  ){}

  getPokemon(id: any): void{
    this.pokeService.getPokemonDetail(id).subscribe((pokemon: any) => {
      this.pokemon = pokemon,
      this.urlImage = pokemon.sprites.front_default,
      this.urlImage2 = pokemon.sprites.other.home.front_default,
      this.urlImage3 = pokemon.sprites.other.dream_world.front_default});
  }


}
