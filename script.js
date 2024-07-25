function calc() {
    let euroField = document.getElementById('euroField');
    let usdField = document.getElementById('usdField');

    let euroValue = euroField.value;
    let usdValue = usdField.value;

    const exchangeRate = 0.981; // 1 Euro = 0.981 USD

    if (euroValue && !isNaN(euroValue)) {
        let result = euroValue * exchangeRate;
        usdField.value = result.toFixed(2).replace('.', ',');
    } else if (usdValue && !isNaN(usdValue)) {
        let result = usdValue / exchangeRate;
        euroField.value = result.toFixed(2).replace('.', ',');
    } else {
        alert("Bitte einen Wert in eines der Felder eingeben.");
    }
}