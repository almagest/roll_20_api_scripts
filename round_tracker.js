on("change:campaign:turnorder", function() {
    // Add token to maps for round tracker - set its initiative to "Round 0"
    // AnnounceNewRound - Set to TRUE if you want the script to announce
    // the beginning of each new round.
    var AnnounceNewRound = false,
        turn_order,
        RoundTracker,
        CurrentRound;
    if (!Campaign().get("turnorder")) {
        return;
    }
    turn_order = JSON.parse(Campaign().get("turnorder"));
    if (!turn_order.length) {
        return;
    }
    if (typeof turn_order[0].pr === "string") {
        if (turn_order[0].pr.substring(0, 5) === "Round") {
            RoundTracker = turn_order[0].pr;
            CurrentRound = parseInt(RoundTracker.substring(5), 10);
            turn_order[0].pr = "Round " + (CurrentRound + 1);
            Campaign().set({turnorder: JSON.stringify(turn_order)});
            if (AnnounceNewRound === true) {
                sendChat("", "/desc ---- " + turn_order[0].pr + " ----");
            }
        }
    }
    // Exit script if custom item on turn order tracker instead of a token...
    if (turn_order[0].id === -1) {
        return;
    }
});