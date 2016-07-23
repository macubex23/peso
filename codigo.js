
var peso;
var pesoEnMarte;

alert("¿quieres saber tu peso en Marte?");
peso = prompt ("¿Cuál es tu paso en Kg?", "70");
peso = parseInt(peso);
pesoEnMarte = (peso / 9.18) * 3.711;

alert("Tu peso en Marte es: " + pesoEnMarte +  "  Kg. " );
