function myfunc() {

    var one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen;
    one = document.getElementById("one").value;
    two = document.getElementById("two").value;
    three = document.getElementById("three").value;
    four = document.getElementById("four").value;
    five = document.getElementById("five").value;
    six = document.getElementById("six").value;
    seven = document.getElementById("seven").value;
    eight = document.getElementById("eight").value;
    nine = document.getElementById("nine").value;
    ten = document.getElementById("ten").value;
    eleven = document.getElementById("eleven").value;
    twelve = document.getElementById("twelve").value;
    thirteen = document.getElementById("thirteen").value;
    fourteen = document.getElementById("fourteen").value;
    fifteen = document.getElementById("fifteen").value;
    sixteen = document.getElementById("sixteen").value;

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
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player X won');
    }
    else if ((two == 'x' || two == 'X') && (three == 'x' ||
        three == 'X') && (four == 'x' || four == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("one").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;

        window.alert('Player X won');
    }
    else if ((seven == 'x' || seven == 'X') && (six == 'x' ||
        six == 'X') && (five == 'x' || five == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player X won');
    }
    else if ((seven == 'x' || seven == 'X') && (six == 'x' ||
        six == 'X') && (eight == 'x' || eight == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player X won');
    }
    else if ((eleven == 'x' || eleven == 'X') && (ten == 'x' ||
        ten == 'X') && (nine == 'x' || nine == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player X won');
    }
    else if ((thirteen == 'x' || thirteen == 'X') && (fifteen == 'x' ||
        fifteen == 'X') && (fourteen == 'x' || fourteen == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player X won');
    }
    else if ((fourteen == 'x' || fourteen == 'X') && (fifteen == 'x' ||
        fifteen == 'X') && (sixteen == 'x' || sixteen == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("one").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("eight").disabled = true;
        window.alert('Player X won');
    }//COLONNE
    else if ((one == 'x' || one == 'X') && (five == 'x' ||
        five == 'X') && (nine == 'x' || nine == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("four").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player X won');
    }
    //2COLONNa
    else if ((thirteen == 'x' || thirteen == 'X') && (five == 'x' ||
        five == 'X') && (nine == 'x' || nine == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("four").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player X won');
    }

    if ((six == 'x' || six == 'X') && (two == 'x' ||
        two == 'X') && (ten == 'x' || ten == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("one").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player X won');
    }

    if ((six == 'x' || six == 'X') && (ten == 'x' ||
        ten == 'X') && (fourteen == 'x' || fourteen == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player X won');
    }
    if ((eleven == 'x' || eleven == 'X') && (seven == 'x' ||
        seven == 'X') && (three == 'x' || three == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player X won');
    }//3COLONNA
    if ((eleven == 'x' || eleven == 'X') && (seven == 'x' ||
        seven == 'X') && (fifteen == 'x' || fifteen == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player X won');
    }
    if ((four == 'x' || four == 'X') && (eight == 'x' ||
        eight == 'X') && (twelve == 'x' || twelve == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("eleven").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player X won');
    }
    if ((eight == 'x' || eight == 'X') && (twelve == 'x' ||
        twelve == 'X') && (sixteen == 'x' || sixteen == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("three").disabled = true;
        window.alert('Player X won');
    }
    //DIAG DA SX
    if ((one == 'x' || one == 'X') && (six == 'x' ||
        six == 'X') && (eleven == 'x' || eleven == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("sixteen").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("three").disabled = true;
        window.alert('Player X won');
    }
    if ((five == 'x' || five == 'X') && (ten == 'x' ||
        ten == 'X') && (fifteen == 'x' || fifteen == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("four").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        document.getElementById("three").disabled = true;
        window.alert('Player X won');
    }

    if ((six == 'x' || six == 'X') && (eleven == 'x' ||
        eleven == 'X') && (sixteen == 'x' || sixteen == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("four").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("three").disabled = true;
        window.alert('Player X won');
    }//DIAG DA DX

    if ((four == 'x' || four == 'X') && (seven == 'x' ||
        seven == 'X') && (ten == 'x' || ten == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("five").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        document.getElementById("three").disabled = true;
        window.alert('Player X won');
    }

    if ((thirteen == 'x' || thirteen == 'X') && (seven == 'x' ||
        seven == 'X') && (ten == 'x' || ten == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("five").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        document.getElementById("three").disabled = true;
        window.alert('Player X won');
    }

    if ((eight == 'x' || eight == 'X') && (eleven == 'x' ||
        eleven == 'X') && (fourteen == 'x' || fourteen == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("five").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("sixteen").disabled = true;
        document.getElementById("three").disabled = true;
        window.alert('Player X won');
    }


    // Checking of Player 0 finish
    // Checking for Player X starts, Is player X won or
    // not and after that disabled all the other fields
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
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((two == '0' || two == '0') && (three == '0' ||
        three == '0') && (four == '0' || four == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("one").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;

        window.alert('Player 0 won');
    }
    else if ((seven == '0' || seven == '0') && (six == '0' ||
        six == '0') && (five == '0' || five == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((seven == '0' || seven == '0') && (six == '0' ||
        six == '0') && (eight == '0' || eight == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((eleven == '0' || eleven == '0') && (ten == '0' ||
        ten == '0') && (nine == '0' || nine == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((thirteen == '0' || thirteen == '0') && (fifteen == '0' ||
        fifteen == '0') && (fourteen == '0' || fourteen == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((fourteen == '0' || fourteen == '0') && (fifteen == '0' ||
        fifteen == '0') && (sixteen == '0' || sixteen == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("one").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("eight").disabled = true;
        window.alert('Player 0 won');
    }//COLONNE
    else if ((one == '0' || one == '0') && (five == '0' ||
        five == '0') && (nine == '0' || nine == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("four").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player 0 won');
    }
    //2COLONNa
    else if ((thirteen == '0' || thirteen == '0') && (five == '0' ||
        five == '0') && (nine == '0' || nine == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("four").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player 0 won');
    }

    if ((six == '0' || six == '0') && (two == '0' ||
        two == '0') && (ten == '0' || ten == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("one").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player 0 won');
    }

    if ((six == '0' || six == '0') && (ten == '0' ||
        ten == '0') && (fourteen == '0' || fourteen == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player 0 won');
    }
    if ((eleven == '0' || eleven == '0') && (seven == '0' ||
        seven == '0') && (three == '0' || three == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player 0 won');
    }//3COLONNA
    if ((eleven == '0' || eleven == '0') && (seven == '0' ||
        seven == '0') && (fifteen == '0' || fifteen == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player 0 won');
    }
    if ((four == '0' || four == '0') && (eight == '0' ||
        eight == '0') && (twelve == '0' || twelve == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("eleven").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        window.alert('Player 0 won');
    }
    if ((eight == '0' || eight == '0') && (twelve == '0' ||
        twelve == '0') && (sixteen == '0' || sixteen == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("three").disabled = true;
        window.alert('Player 0 won');
    }
    //DIAG DA SX
    if ((one == '0' || one == '0') && (six == '0' ||
        six == '0') && (eleven == '0' || eleven == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("sixteen").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("three").disabled = true;
        window.alert('Player 0 won');
    }
    if ((five == '0' || five == '0') && (ten == '0' ||
        ten == '0') && (fifteen == '0' || fifteen == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("four").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        document.getElementById("three").disabled = true;
        window.alert('Player 0 won');
    }

    if ((six == '0' || six == '0') && (eleven == '0' ||
        eleven == '0') && (sixteen == '0' || sixteen == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("four").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("three").disabled = true;
        window.alert('Player 0 won');
    }//DIAG DA DX

    if ((four == '0' || four == '0') && (seven == '0' ||
        seven == '0') && (ten == '0' || ten == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("five").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        document.getElementById("three").disabled = true;
        window.alert('Player 0 won');
    }

    if ((thirteen == '0' || thirteen == '0') && (seven == '0' ||
        seven == '0') && (ten == '0' || ten == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("five").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("eleven").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("fourteen").disabled = true;
        document.getElementById("sixteen").disabled = true;
        document.getElementById("three").disabled = true;
        window.alert('Player 0 won');
    }

    if ((eight == '0' || eight == '0') && (eleven == '0' ||
        eleven == '0') && (fourteen == '0' || fourteen == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("five").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("twelve").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("fifteen").disabled = true;
        document.getElementById("thirteen").disabled = true;
        document.getElementById("ten").disabled = true;
        document.getElementById("sixteen").disabled = true;
        document.getElementById("three").disabled = true;
        window.alert('Player 0 won');
    }
   
    // Checking of Player 0 finish
    // Checking about Tie
    else if ((one == 'X' || one == '0') && (two == 'X' || two == '0') && (three == 'X' || three == '0') &&
        (four == 'X' || four == '0') && (five == 'X' || five == '0') && (six == 'X' || six == '0') &&
        (seven == 'X' || seven == '0') && (eight == 'X' || eight == '0') && (nine == 'X' || nine == '0') &&
        (ten == 'X' || ten == '0') && (eleven == 'X' || eleven == '0') && (twelve == 'X' || twelve == '0') &&
        (thirteen == 'X' || thirteen == '0') && (fourteen == 'X' || fourteen == '0') && (fifteen == 'X' ||
            fifteen == '0') && (sixteen == 'X' || sixteen == '0')) {
        document.getElementById('print')
            .innerHTML = "Match Tie";
        window.alert('Match Tie');
    }
    else {

        //+Printing Result
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
    document.getElementById('ten').value = '';
    document.getElementById("eleven").value = '';
    document.getElementById("twelve").value = '';
    document.getElementById("thirteen").value = '';
    document.getElementById("fourteen").value = '';
    document.getElementById("fifteen").value = '';
    document.getElementById("sixteen").value = '';

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
function myfunc_12() {
    if (flag == 1) {
        document.getElementById("ten").value = "X";
        document.getElementById("ten").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("ten").value = "0";
        document.getElementById("ten").disabled = true;
        flag = 1;
    }
}

function myfunc_13() {
    if (flag == 1) {
        document.getElementById("eleven").value = "X";
        document.getElementById("eleven").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("eleven").value = "0";
        document.getElementById("eleven").disabled = true;
        flag = 1;
    }
}

function myfunc_14() {
    if (flag == 1) {
        document.getElementById("twelve").value = "X";
        document.getElementById("twelve").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("twelve").value = "0";
        document.getElementById("twelve").disabled = true;
        flag = 1;
    }
}

function myfunc_15() {
    if (flag == 1) {
        document.getElementById("thirteen").value = "X";
        document.getElementById("thirteen").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("thirteen").value = "0";
        document.getElementById("thirteen").disabled = true;
        flag = 1;
    }
}

function myfunc_16() {
    if (flag == 1) {
        document.getElementById("fourteen").value = "X";
        document.getElementById("fourteen").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("fourteen").value = "0";
        document.getElementById("fourteen").disabled = true;
        flag = 1;
    }
}

function myfunc_17() {
    if (flag == 1) {
        document.getElementById("fifteen").value = "X";
        document.getElementById("fifteen").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("fifteen").value = "0";
        document.getElementById("fifteen").disabled = true;
        flag = 1;
    }
}

function myfunc_18() {
    if (flag == 1) {
        document.getElementById("sixteen").value = "X";
        document.getElementById("sixteen").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("sixteen").value = "0";
        document.getElementById("sixteen").disabled = true;
        flag = 1;
    }
}