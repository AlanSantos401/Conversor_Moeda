const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

const kwanza = 0.0066286623359406

const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,JPY-BRL,ARS-BRL,GBP-BRL").then(response => response.json())
  
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    const iene = data.JPYBRL.high
    const pesoarg = data.ARSBRL.high
    const libra = data.GBPBRL.high

    

    if (currencySelect.value == "pesoarg") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 2
        }).format(inputCurrencyValue / pesoarg);
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libra);
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoin);
    }

    if (currencySelect.value == "kwanza") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA"
        }).format(inputCurrencyValue / kwanza);
    }


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolar);
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euro);
    }

    if (currencySelect.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / iene);
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
