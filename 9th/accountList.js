class Account{
    constructor(name, balance){
        this.name = name;
        this.balance = balance; 
        
    }
    credit(value){
        this.balance += value;
    }
    describe()
    {
        return `Owner:${this.name}, Balance:${this.balance}`
    }
}
const Sean = new Account('Sean',0);
const Brad = new Account('Brad',0);
const Georges = new Account('Georges',0);

Sean.credit(1000);
Brad.credit(500);

console.log(Sean.describe());
console.log(Brad.describe());
console.log(Georges.describe());