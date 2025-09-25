import {Jugador} from './jugador.js'
class Extraterrestre extends Jugador {
    constructor(miNombre){
        fuerza = Math.floor(Math.random() * 85) + 1;
        super(miNombre, fuerza, 150);
    }
    
    get nombre(){
        nombreLista = this.miNombre;
        return nombreLista;
    }
}