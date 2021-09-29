const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Converter = require('./services/converter');
const { response } = require('express');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/convert/roman-to-arabic', (request, response) => {
    const { value: romanNumber = '' } = request.body;

    const arabic = Converter.romanToArabic(romanNumber);
    const roman = romanNumber.toUpperCase();

    response.send({ arabic, roman });
});

app.post('/convert/arabic-to-roman', (request, response) => {
    const { value: arabicNumber = 0 } = request.body;

    try {
        const arabic = arabicNumber;
        const roman = Converter.arabicToRoman(arabicNumber);

        response.send({ arabic, roman });
    } catch ({ message }) {
        response
            .status(422)
            .send({ message })
    }
});

app.listen(port);
console.log(`Local: http://localhost:${port}/`);
