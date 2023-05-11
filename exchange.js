document.addEventListener("DOMContentLoaded", () => {
    const amount = document.getElementById("amount")
    const currency = document.getElementById("currency")
    const convert = document.getElementById('convert')
    const result = document.getElementById("result")

    console.log(convert)
    const apiKey = "ADD YOUR API KEY"
    const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_"

    convert.addEventListener("click", () => {
        console.log('ho')
        const amountTotal = amount.value
        const currencyTotal = currency.value
        const url = apiUrl + currencyTotal

        console.log(amount.value)
        console.log(currency)

        fetch(url, {
            headers: {
                'X-API-KEY': apiKey
            }
        }).then(response => response.json()).then(data => {
            const rate = data.exchange_rate;
            console.log("rate",rate)
            const resultPrice = amountTotal * rate;
            console.log("result", result)
            result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD`
        }).catch(error => {
            console.log("Request failed:", error)
            result.innerHTML = "An error occurred please try again later"
        })
    })
});