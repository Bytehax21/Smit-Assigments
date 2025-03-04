// A household is charged for water consumption based on the number of liters used.
// Billing Conditions:
// Up to 30 liters → $5
// 31 to 60 liters → $10
// More than 60 liters → $15 + $1 per extra liter

// waterConsumption = prompt("Enter the number of liters used:");
// waterConsumption = parseInt(waterConsumption);
// if (waterConsumption <= 30) {
//     let Bill = waterConsumption * 5;
    
//     document.write(`<h2>Your bill is: <u>$ ${Bill} </u></h2>`);
//     } else if (waterConsumption  > 30 && waterConsumption <= 60) {
//         let Bill = waterConsumption * 10;
//         document.write(`<h2>Your bill is: <u>$ ${Bill} </u></h2>`); 
//        }
//     else if (waterConsumption > 60) {
//         let Bill = waterConsumption * 15 + 1;
//         document.write(`<h2>Your bill is: <u>$ ${Bill} </u></h2>`);
//         }
        
    
    // 
let sentence = prompt("Enter a sentence:");
let vowels = "aeiou";
let count = 0;
for (let i = 0; i < sentence.length; i++) {
    if (vowels.indexOf(sentence[i].toLowerCase()) !== -1) {
        count++;
        }
        }
        document.write("Count of vowels: " + count);
            //


