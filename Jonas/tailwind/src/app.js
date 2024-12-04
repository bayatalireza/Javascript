const calcTip = function (bill) {
      return bill >= 50 &&  bill <= 300 ? bill * 0.15 : bill * 0.2
}

const bills = [125, 555, 44]

const tip1= calcTip(bills[0])
const tip2= calcTip(bills[1])
const tip3= calcTip(bills[2])

const tips = [tip1, tip2, tip3]

console.log(bills, tips)