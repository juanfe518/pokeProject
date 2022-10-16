import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { PokeServiceService } from '../services/poke-service.service';

@Component({
  selector: 'app-consultarpokemon',
  templateUrl: './consultarpokemon.component.html',
  styleUrls: ['./consultarpokemon.component.css']
})
export class ConsultarpokemonComponent implements OnInit {

  constructor(
    private pokeService: PokeServiceService
  ) { }

  ngOnInit(): void {
  }


  
  pokemon: Pokemon;
  urlImage = "";
  urlImage2 = "";
  urlImage3 = "";


  getPokemon(id: any): void{
    this.pokeService.getPokemonDetail(id).subscribe((pokemon: any) => {
      this.pokemon = pokemon,
      this.urlImage = pokemon.sprites.front_default,
      this.urlImage2 = pokemon.sprites.other.home.front_default,
      this.urlImage3 = pokemon.sprites.other.dream_world.front_default});
  }


}
