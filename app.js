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
        },
        // Regular Attack
        attack: function () {
            var maxDmg = 10;
            var minDmg = 3;
            // Set the damage randomly (Max damage is 10, min damage is 3)
            var dmg = Math.max(Math.floor(Math.random() * maxDmg) + 1, minDmg);
            this.enemyHp -= dmg;

            if (this.enemyHp <= 0) {
                alert('Winner winner chicken dinner!');
                this.gameIsRunning = false;
                return;
            }

            max = 12;
            min = 5;
            dmg = Math.max(Math.floor(Math.random() * maxDmg) + 1, minDmg);
            this.playerHp -= dmg;

            if (this.playerHp <= 0) {
                alert('You lost! :(');
                this.gameIsRunning = false;
                return;
            }


        },
        specialAtk: function () {

        },
        heal: function () {

        },
        giveUp: function () {

        }
    },
    computed: {

    }
});