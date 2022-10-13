import { Pokemon } from "./Pokemon";

export class Abilities{
    id?: number;
    name = "";
    is_main_series = false;
    generation = {};
    names = [];
    effect_entries = [];
    effect_changes = [];
    flavor_text_entries = [];
    pokemon: Pokemon; 

}