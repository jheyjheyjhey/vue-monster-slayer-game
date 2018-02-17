new Vue({
    el: "#app",
    data: {
        playerHp: 100,
        enemyHp: 100,
        gameIsRunning: false,
        turns: []
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
            var dmg = this.calculateDmg(3, 10);
            this.enemyHp -= dmg;
            this.turns.unshift({
                isPlayer: false,
                text: 'Player hits monster for ' + dmg + 'points'
            });            
            if (this.checkWinner()) {
                return;
            }

            this.enemyAtk();
            
        },
        specialAtk: function () {
            var dmg = this.calculateDmg(10, 20);
            this.enemyHp -= dmg;  
            this.turns.unshift({
                isPlayer: false,
                text: 'Player hits monster hard for ' + dmg + 'points'
            });          
            if (this.checkWinner()) {
                return;
            }

            this.enemyAtk();
        },
        heal: function () {
            if (this.playerHp <= 90)
                this.playerHp += 10;
            else
                this.playerHp = 100;

            this.turns.unshift({
                isPlayer: false,
                text: 'Player heals for 10 points' 
            });   
            this.enemyAtk();
        },
        giveUp: function () {
            alert("You gave up :(")
            this.gameIsRunning = false;
        },
        calculateDmg: function (minDmg, maxDmg) {
            return Math.max(Math.floor(Math.random() * maxDmg) + 1, minDmg);
        },
        checkWinner: function () {
            if (this.enemyHp <= 0) {
                if (confirm('Winner winner chicken dinner! Start a new game?')) {
                    this.startGame();                    
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if (this.playerHp <= 0){
                if (confirm('You lost! :( Start a new game?')) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        enemyAtk: function () {
            var dmg = this.calculateDmg(5, 12);
            this.playerHp -= dmg;
            this.turns.unshift({
                isPlayer: false,
                text: 'Enemy hits you for '+ dmg + 'points'
            })
            this.checkWinner();
        }
    },
    computed: {

    }
});