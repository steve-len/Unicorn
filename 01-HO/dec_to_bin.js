let inputVal = 10;

if (inputVal > 0 || Number.isInteger(inputVal)) {
        let result = '';
        while (inputVal > 0) {
            result = (inputVal % 2) + result;
            inputVal = Math.floor(inputVal / 2);
        }
        console.log(result);
    } else {
        console.log("Cannot be 0");
}