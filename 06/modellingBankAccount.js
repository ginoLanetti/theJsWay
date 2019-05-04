const account = {
    name: 'Alex',
    balance: 0,
    credit(value) {
        this.balance += value;
    },
    describe() {
        return `owner: ${this.name}, balance: ${this.balance}`;
    }
}
console.log(account.describe());