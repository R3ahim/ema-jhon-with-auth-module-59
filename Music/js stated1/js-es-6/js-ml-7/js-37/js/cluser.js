// const bank = owener =>{
//     balance = 0;
//     return amount =>{
//         // blance = balance + amount ;
//         balance += amount;
//         return balance

//     }
// }
const bank = owener =>{
    balance = 0;
    return {
        deposite: amount=>{
            // blance = balance + amount ;
            balance += amount;
            return balance
    
        },
        withdraw: amount=>{
            // blance = balance - amount ;
            balance -= amount;
            return balance
    
        }
    }
    }
const mofizBank = bank('mofiz');
console.log(mofizBank.deposite(100))
console.log(mofizBank.deposite(300))
console.log(mofizBank.deposite(50))
console.log(mofizBank.balance)
console.log(mofizBank.deposite(200));
console.log(mofizBank.withdraw(100));