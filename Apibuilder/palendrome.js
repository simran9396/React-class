const palendrome = (str) => {
    const arrStr = str.split("")
    console.log(arrStr);
    console.log(arrStr.join(""))
}
palendrome("madam")




// -----------------------------------------
const optipalendrome = (str) => {
    const arrstr = str.split("");
    for ( i = 0; i < Math.floor(arrstr.length / 2); i++); {
        if (arrstr[i] !== arrstr[arrstr.length - 1 - i]) {
            return false;

        }
    }
    return true;
}
console.log(optipalendrome("madam"))