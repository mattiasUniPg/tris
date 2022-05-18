// JavaScript source code
function myfunc() {

    var one, two, three, four, five, six, seven, eight, nine;
    one = document.getElementById("one").value;
    two = document.getElementById("two").value;
    three = document.getElementById("three").value;
    four = document.getElementById("four").value;
    five = document.getElementById("five").value;
    six = document.getElementById("six").value;
    seven = document.getElementById("seven").value;
    eight = document.getElementById("eight").value;
    nine = document.getElementById("nine").value;

    if ((one == 'x' || one == 'X') && (two == 'x' ||
        two == 'X') && (three == 'x' || three == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        window.alert('Player X won');
    }
    else if ((one == 'x' || one == 'X') && (four == 'x' ||
        four == 'X') && (seven == 'x' || seven == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;

        window.alert('Player X won');
    }
    else if ((seven == 'x' || seven == 'X') && (eight == 'x' ||
        eight == 'X') && (nine == 'x' || nine == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        window.alert('Player X won');
    }
    else if ((three == 'x' || three == 'X') && (six == 'x' ||
        six == 'X') && (nine == 'x' || nine == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        window.alert('Player X won');
    }
    else if ((one == 'x' || one == 'X') && (five == 'x' ||
        five == 'X') && (nine == 'x' || nine == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        window.alert('Player X won');
    }
    else if ((three == 'x' || three == 'X') && (five == 'x' ||
        five == 'X') && (seven == 'x' || seven == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        window.alert('Player X won');
    }
    else if ((two == 'x' || two == 'X') && (five == 'x' ||
        five == 'X') && (eight == 'x' || eight == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("one").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("nine").disabled = true;
        window.alert('Player X won');
    }
    else if ((four == 'x' || four == 'X') && (five == 'x' ||
        five == 'X') && (six == 'x' || six == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        window.alert('Player X won');
    }

    else if ((one == '0' || one == '0') && (two == '0' ||
        two == '0') && (three == '0' || three == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((one == '0' || one == '0') && (four == '0' ||
        four == '0') && (seven == '0' || seven == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((seven == '0' || seven == '0') && (eight == '0' ||
        eight == '0') && (nine == '0' || nine == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((three == '0' || three == '0') && (six == '0' ||
        six == '0') && (nine == '0' || nine == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((one == '0' || one == '0') && (five == '0' ||
        five == '0') && (nine == '0' || nine == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((three == '0' || three == '0') && (five == '0' ||
        five == '0') && (seven == '0' || seven == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((two == '0' || two == '0') && (five == '0' ||
        five == '0') && (eight == '0' || eight == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("one").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("nine").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((four == '0' || four == '0') && (five == '0' ||
        five == '0') && (six == '0' || six == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        window.alert('Player 0 won');
    }

    else if ((one == 'X' || one == '0') && (two == 'X'
        || two == '0') && (three == 'X' || three == '0') &&
        (four == 'X' || four == '0') && (five == 'X' ||
            five == '0') && (six == 'X' || six == '0') &&
        (seven == 'X' || seven == '0') && (eight == 'X' ||
            eight == '0') && (nine == 'X' || nine == '0')) {
        document.getElementById('print')
            .innerHTML = "Match Tie";
        window.alert('Match Tie');
    }
    else {

        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}

function myfunc_2() {
    location.reload();
    document.getElementById('one').value = '';
    document.getElementById("two").value = '';
    document.getElementById("three").value = '';
    document.getElementById("four").value = '';
    document.getElementById("five").value = '';
    document.getElementById("six").value = '';
    document.getElementById("seven").value = '';
    document.getElementById("eight").value = '';
    document.getElementById("nine").value = '';

}

flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("one").value = "X";
        document.getElementById("one").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("one").value = "0";
        document.getElementById("one").disabled = true;
        flag = 1;
    }
}

function myfunc_4() {
    if (flag == 1) {
        document.getElementById("two").value = "X";
        document.getElementById("two").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("two").value = "0";
        document.getElementById("two").disabled = true;
        flag = 1;
    }
}

function myfunc_5() {
    if (flag == 1) {
        document.getElementById("three").value = "X";
        document.getElementById("three").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("three").value = "0";
        document.getElementById("three").disabled = true;
        flag = 1;
    }
}

function myfunc_6() {
    if (flag == 1) {
        document.getElementById("four").value = "X";
        document.getElementById("four").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("four").value = "0";
        document.getElementById("four").disabled = true;
        flag = 1;
    }
}

function myfunc_7() {
    if (flag == 1) {
        document.getElementById("five").value = "X";
        document.getElementById("five").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("five").value = "0";
        document.getElementById("five").disabled = true;
        flag = 1;
    }
}

function myfunc_8() {
    if (flag == 1) {
        document.getElementById("six").value = "X";
        document.getElementById("six").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("six").value = "0";
        document.getElementById("six").disabled = true;
        flag = 1;
    }
}

function myfunc_9() {
    if (flag == 1) {
        document.getElementById("seven").value = "X";
        document.getElementById("seven").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("seven").value = "0";
        document.getElementById("seven").disabled = true;
        flag = 1;
    }
}

function myfunc_10() {
    if (flag == 1) {
        document.getElementById("eight").value = "X";
        document.getElementById("eight").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("eight").value = "0";
        document.getElementById("eight").disabled = true;
        flag = 1;
    }
}

function myfunc_11() {
    if (flag == 1) {
        document.getElementById("nine").value = "X";
        document.getElementById("nine").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("nine").value = "0";
        document.getElementById("nine").disabled = true;
        flag = 1;
    }
}