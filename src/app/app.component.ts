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

  constructor(
    private pokeService: PokeServiceService
  ){}

  getPokemon(id: any): void{
    this.pokeService.getPokemonDetail(id).subscribe(pokemon => this.pokemon = pokemon);
  }


}
