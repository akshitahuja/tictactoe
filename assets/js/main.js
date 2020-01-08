/*
****************************
    Author: Akshit Ahuja
    Version: 1.0
    Profile Link: https://github.com/akshitahuja
****************************
*/

/* Base Cookie Functions */
function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
/* Base Cookie Functions */

$('.start-game-btn').on('click', function () {
    var player1 = $('#player1').val();
    var player2 = $('#player2').val();

    if (player1 == '' || player2 == '') {
        alert("Please enter both Players Name");
        return false;
    }
    else {
        setCookie('player1', player1);
        setCookie('player2', player2);
        window.location.href = gameURL;
    }
});

$('.nodes').click(function () {
    var fid = $(this).attr('id');
    if ($('#'+fid).children().length == 0) {
        var sign = getCookie('sign');
        if (sign == 'cross') {
            var newSign = 'zero';
        }
        else {
            var newSign = 'cross';
        }
        setCookie('sign', newSign);
        var content = '<img src="'+baseURL+'assets/images/'+sign+'.png" class="img-responsive '+sign+'-sign" name="'+sign+'" />';
        $('#'+fid).html(content);

        // var winCase1 = Array(1,2,3);
        // var winCase2 = Array(4,5,6);
        // var winCase3 = Array(7,8,9);
        // var winCase4 = Array(1,4,7);
        // var winCase5 = Array(2,5,8);
        // var winCase6 = Array(3,6,9);
        // var winCase7 = Array(1,5,9);
        // var winCase8 = Array(3,5,7);

        var count = 1;
        var prevSign = '';
        while (count <= 3) {
            var sign = $('#node'+count).children().attr('name');
            if (sign != undefined) {
                if (prevSign != '') {
                    if (sign === prevSign) {
                        prevSign = sign;
                        if (count === 3) {
                            if (sign == 'cross') {
                                var winner = getCookie('player1');
                                alert(winner+' has won the game!');
                            }
                            else {
                                var winner = getCookie('player2');
                                alert(winner+' has won the game!');
                            }
                            window.location.href = baseURL;
                        }
                        count++;
                    }
                    else {
                        break;
                    }
                }
                else {
                    prevSign = sign;
                    count++;
                }
            }
            else {
                break;
            }
        }

        var count = 4;
        var prevSign = '';
        while (count <= 6) {
            var sign = $('#node'+count).children().attr('name');
            if (sign != undefined) {
                if (prevSign != '') {
                    if (sign === prevSign) {
                        if (count === 6) {
                            if (sign == 'cross') {
                                var winner = getCookie('player1');
                                alert(winner+' has won the game!');
                            }
                            else {
                                var winner = getCookie('player2');
                                alert(winner+' has won the game!');
                            }
                            window.location.href = baseURL;
                        }
                        count++;
                    }
                    else {
                        break;
                    }
                }
                else {
                    prevSign = sign;
                    count++;
                }
            }
            else {
                break;
            }
        }

        var count = 7;
        var prevSign = '';
        while (count <= 9) {
            var sign = $('#node'+count).children().attr('name');
            if (sign != undefined) {
                if (prevSign != '') {
                    if (sign === prevSign) {
                        if (count === 9) {
                            if (sign == 'cross') {
                                var winner = getCookie('player1');
                                alert(winner+' has won the game!');
                            }
                            else {
                                var winner = getCookie('player2');
                                alert(winner+' has won the game!');
                            }
                            window.location.href = baseURL;
                        }
                        count++;
                    }
                    else {
                        break;
                    }
                }
                else {
                    prevSign = sign;
                    count++;
                }
            }
            else {
                break;
            }
        }

        var count = 1;
        var prevSign = '';
        while (count <= 7) {
            var sign = $('#node'+count).children().attr('name');
            if (sign != undefined) {
                if (prevSign != '') {
                    if (sign === prevSign) {
                        if (count === 7) {
                            if (sign == 'cross') {
                                var winner = getCookie('player1');
                                alert(winner+' has won the game!');
                            }
                            else {
                                var winner = getCookie('player2');
                                alert(winner+' has won the game!');
                            }
                            window.location.href = baseURL;
                        }
                        count = count + 3;
                    }
                    else {
                        break;
                    }
                }
                else {
                    prevSign = sign;
                    count = count + 3;
                }
            }
            else {
                break;
            }
        }

        var count = 2;
        var prevSign = '';
        while (count <= 8) {
            var sign = $('#node'+count).children().attr('name');
            if (sign != undefined) {
                if (prevSign != '') {
                    if (sign === prevSign) {
                        if (count === 8) {
                            if (sign == 'cross') {
                                var winner = getCookie('player1');
                                alert(winner+' has won the game!');
                            }
                            else {
                                var winner = getCookie('player2');
                                alert(winner+' has won the game!');
                            }
                            window.location.href = baseURL;
                        }
                        count = count + 3;
                    }
                    else {
                        break;
                    }
                }
                else {
                    prevSign = sign;
                    count = count + 3;
                }
            }
            else {
                break;
            }
        }

        var count = 3;
        var prevSign = '';
        while (count <= 9) {
            var sign = $('#node'+count).children().attr('name');
            if (sign != undefined) {
                if (prevSign != '') {
                    if (sign === prevSign) {
                        if (count === 9) {
                            if (sign == 'cross') {
                                var winner = getCookie('player1');
                                alert(winner+' has won the game!');
                            }
                            else {
                                var winner = getCookie('player2');
                                alert(winner+' has won the game!');
                            }
                            window.location.href = baseURL;
                        }
                        count = count + 3;
                    }
                    else {
                        break;
                    }
                }
                else {
                    prevSign = sign;
                    count = count + 3;
                }
            }
            else {
                break;
            }
        }

        var count = 1;
        var prevSign = '';
        while (count <= 9) {
            var sign = $('#node'+count).children().attr('name');
            if (sign != undefined) {
                if (prevSign != '') {
                    if (sign === prevSign) {
                        if (count === 9) {
                            if (sign == 'cross') {
                                var winner = getCookie('player1');
                                alert(winner+' has won the game!');
                            }
                            else {
                                var winner = getCookie('player2');
                                alert(winner+' has won the game!');
                            }
                            window.location.href = baseURL;
                        }
                        count = count + 4;
                    }
                    else {
                        break;
                    }
                }
                else {
                    prevSign = sign;
                    count = count + 4;
                }
            }
            else {
                break;
            }
        }

        var count = 3;
        var prevSign = '';
        while (count <= 7) {
            var sign = $('#node'+count).children().attr('name');
            if (sign != undefined) {
                if (prevSign != '') {
                    if (sign === prevSign) {
                        if (count === 7) {
                            if (sign == 'cross') {
                                var winner = getCookie('player1');
                                alert(winner+' has won the game!');
                            }
                            else {
                                var winner = getCookie('player2');
                                alert(winner+' has won the game!');
                            }
                            window.location.href = baseURL;
                        }
                        count = count + 2;
                    }
                    else {
                        break;
                    }
                }
                else {
                    prevSign = sign;
                    count = count + 2;
                }
            }
            else {
                break;
            }
        }
    }
});