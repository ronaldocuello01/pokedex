import { POKEMON_TYPE_COLORS } from "./constants";

const getPokemonColorMain = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()][0];
const getPokemonColorSecond = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()][1];

export { getPokemonColorMain, getPokemonColorSecond }