walletGenerator = (w) => {
  let newWallet = w.split("");

  let length = w.length;

  let temp =
    newWallet[0] +
    newWallet[1] +
    newWallet[2] +
    newWallet[3] +
    newWallet[4] +
    "..." +
    newWallet[length - 5] +
    newWallet[length - 4] +
    newWallet[length - 3] +
    newWallet[length - 2] +
    newWallet[length - 1];

  return temp;
};

//examlple
const wallet = "bc1ph7x40wzlevw4s2hzyg7zyze93xwptmn4lc849h2kz20ex7umcckshtx9pg";
const brief = walletGenerator(wallet);
console.log("Your wallet is: ", brief);
