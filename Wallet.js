class Wallet {
    constructor(money) {
        let _money = money;

        //getting actual value of wallet
        this.getWalletValue = () => _money;

        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false;
        }

        //changing value of wallet, checking data types & equation
        this.changeWallet = (value, type ="+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("Wrong type of equation.")
                }
            } else {
                console.log(typeof value);
                throw new Error("wrong numer.");
            }
        }
    }

}

const wallet = new Wallet(200);