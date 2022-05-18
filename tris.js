// JavaScript source code
var Simbolo1 = 'X';
var Simbolo2 = 'O';

var P1 = 0;
var P2 = 0;
var Punteggio = document.getElementById("punteggio");
var Turno = document.getElementById("turno");

Punteggio.innerHTML = 'Punteggio: (G1:G2) ' + P1 + ' : ' + P2;

function vittoria() {
    var control = false;
    var val = new Array();
    var t = 1;
    for (i = 1; i <= 3; i++) {
        val[i] = new Array();
        for (k = 1; k <= 3; k++) {
            val[i][k] = document.getElementById("q" + t).innerHTML;
            t += 1;
        }
    }
    for (i = 1; i <= 3; i++) {
        if ((val[1][i] == val[2][i]) && (val[2][i] == val[3][i]) && (val[1][i] != '')) {
            control = true;
        }
        if ((val[i][1] == val[i][2]) && (val[i][2] == val[i][3]) && (val[i][1] != '')) {
            control = true;
        }
        if ((val[1][1] == val[2][2]) && (val[2][2] == val[3][3]) && (val[1][1] != '')) {
            control = true;
        }
        if ((val[1][3] == val[2][2]) && (val[2][2] == val[3][1]) && (val[1][3] != '')) {
            control = true;
        }
    }
    return control;
}

function pieno() {
    var c = true;
    var val = new Array();
    var t = 1;
    for (i = 1; i <= 3; i++) {
        val[i] = new Array();
        for (k = 1; k <= 3; k++) {
            val[i][k] = document.getElementById("q" + t).innerHTML;
            t += 1;
        }
    }
    for (i = 1; i <= 3; i++) {
        for (k = 1; k <= 3; k++) {
            if (val[i][k] == '') { c = false; }
        }
    }
    return c;
}

function reset() {
    for (i = 1; i <= 9; i++) {
        document.getElementById("q" + i).innerHTML = '';
    }
}

function mossa(idel) {
    var div = document.getElementById(idel);
    if (div.innerHTML == '') {
        div.innerHTML = Simbolo1;
        div.style.color = 'blue';
        div.innerHTML = Simbolo2;
        div.style.color = 'red';
        if (vittoria()) {
            (Simbolo1 == 'X' ? P2++ : P1++);
            Punteggio.innerHTML = 'Punteggio: (G1:G2) ' + P1 + ' : ' + P2;
            clear();
        } else if (pieno()) { clear(); }
        if (Simbolo1 != null) {
            Turno.innerHTML = 'Turno: ' + Giocatore1;
            Simbolo1 = 'X';
        } else {
            Turno.innerHTML = 'Turno: ' + Giocatore2;
            Simbolo2 = 'O';
        }
    }
}