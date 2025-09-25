import {Jugador} from './jugador.js'
class Maquina extends Jugador {
    constructor(miNombre){
        fuerza = Math.floor(Math.random() * 85) + 1
        super(miNombre, fuerza, 130)
    }
}