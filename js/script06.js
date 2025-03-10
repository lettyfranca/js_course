function playGame(opt) {
    //0 to 1/3 - rock
    //1/3 to 2/3 - paper
    //2/3 to 1 - scissors
    const optPC = Math.random();

    if (opt === 1) {
        if (optPC >= 0 && optPC < 1/3) {
            alert("You play rock. PC play rock. Tie.");
        } else if (optPC >= 1/3 && optPC < 2/3) {
            alert("You play rock. Pc play paper. You lose.");
        } else if (optPC >= 2/3 && optPC < 3/3) {
            alert("You play rock. Pc play scissors. You win.");
        }
    } else if (opt == 2) {
        if (optPC >= 0 && optPC < 1/3) {
            alert("You play paper. PC play rock. You win.");
        } else if (optPC >= 1/3 && optPC < 2/3) {
            alert("You play paper. Pc play paper. Tin.");
        } else if (optPC >= 2/3 && optPC < 3/3) {
            alert("You play paper. Pc play scissors. You lose.");
        }
    } else if (opt == 3) {
        if (optPC >= 0 && optPC < 1/3) {
            alert("You play scissors. PC play rock. You lose.");
        } else if (optPC >= 1/3 && optPC < 2/3) {
            alert("You play scissors. Pc play paper. You win.");
        } else if (optPC >= 2/3 && optPC < 3/3) {
            alert("You play scissors. Pc play scissors. Tin.");
        }
    }
}
