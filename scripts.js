const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.83
    const euroToday = 6.06
    const libraToday = 7.24
    const ieneToday = 0.037037037
    const kwanzaToday = 0.0062980224
    const bitcoinToday = 601.812
    const pesoargToday = 0.0055928412


    if (currencySelect.value == "pesoarg") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 2
        }).format(inputCurrencyValue / pesoargToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value == "kwanza") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA"
        }).format(inputCurrencyValue / kwanzaToday)
    }


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrecy() {
    const currencyName = document.getElementById('currency-dolar')
    const currencyImage = document.querySelector('.img-eua')

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = 'Dolar Americano'
        currencyImage.src = './assets/estados-unidos (1) 1.png'
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    if (currencySelect.value == "iene") {
        currencyName.innerHTML = 'Iene'
        currencyImage.src = './assets/iene.jpg'
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/bitcoin 1.png'
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './assets/libra 1.png'
    }

    if (currencySelect.value == "kwanza") {
        currencyName.innerHTML = 'Kwanza'
        currencyImage.src = './assets/kuanza.png'
    }

    if (currencySelect.value == "pesoarg") {
        currencyName.innerHTML = 'Peso Argentino'
        currencyImage.src = './assets/peso-argentino.png'
    }


    convertValues()
}

currencySelect.addEventListener('change', changeCurrecy)
convertButton.addEventListener('click', convertValues)
