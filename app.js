new Vue({
    el: "#app",
    data: {
        playerHp: 100,
        enemyHp: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            
            // Ensure the game resets on a new game
            this.playerHp = 100;
            this.enemyHp = 100;
        }
    },
    computed: {

    }
});