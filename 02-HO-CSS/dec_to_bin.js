function convertToBinary() {
    let inputVal = document.getElementById("inputValue").value;
    const binaryResult = document.getElementById("binaryResult");


    if (inputVal > 0 || Number.isInteger(inputVal)) {
        let result = '';
        while (inputVal > 0) {
            result = (inputVal % 2) + result;
            binaryResult.textContent = result;
            inputVal = Math.floor(inputVal / 2);
        }
        return result;
    } else {
        console.log("Cannot be string or 0");
        window.alert("Cannot be string or 0");
        binaryResult.append(": Nemôže byt string alebo 0");
        return null;
    }
}
