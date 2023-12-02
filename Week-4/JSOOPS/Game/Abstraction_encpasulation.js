class BankAccount{
 #accountNumber;
 #balance;
 #accountHolderName;
 constructor(accountNumber,balance,accountHolderName){
    this.#accountHolderName = accountHolderName;
    this.#accountNumber = accountNumber;
    this.#balance = balance;
 }
 getBalance() {
    debugger;
    return this.#balance;
  }
  setBalance(balance){
    return this.#balance = balance;
  }
  deposit(amount) {
  }
  withdraw(amount) {
  }
}
class CheckingAccount extends BankAccount{
    constructor(accountNumber,balance,accountHolderName,amount)
    {
        super(accountNumber,balance,accountHolderName);

    }
      deposit(amount) {
        this.setBalance(this.getBalance() + amount);
        console.log("Deposit of $" + amount + " successful. Current balance: $" + this.getBalance());
    }
    withdraw(amount) {
        if (this.getBalance() >= amount) {
            this.setBalance(this.getBalance() - amount);
            console.log("Withdrawal of $" + amount + " successful. Current balance: $" + this.getBalance());
        } else {
            console.log("Insufficient funds. Withdrawal failed.");
        }
    }
}

class SavingsAccount extends BankAccount{
    constructor(accountNumber,balance,accountHolderName)
    {
        super(accountNumber,balance,accountHolderName);
        
    }
    deposit(amount) {
      this.setBalance(this.getBalance() + amount);
      console.log("Deposit of $" + amount + " successful. Current balance: $" + this.getBalance());
  }
  withdraw(amount) {
      if (this.getBalance() >= amount) {
          this.setBalance(this.getBalance() - amount);
          console.log("Withdrawal of $" + amount + " successful. Current balance: $" + this.getBalance());
      } else {
          console.log("Insufficient funds. Withdrawal failed.");
      }
  }
}

let myAccount = new SavingsAccount("123456789", 10000,"John Robert");
myAccount.deposit(1000);
myAccount.withdraw(500);

let checkAccount = new CheckingAccount("123456788", 1000,"John Robert");
checkAccount.deposit(5000);
checkAccount.withdraw(1000);
