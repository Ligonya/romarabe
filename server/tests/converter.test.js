const Converter = require('../services/converter');

const testValues = [
    { arabic: 2, roman: 'II' },
    { arabic: 28, roman: 'XXVIII' },
    { arabic: 476, roman: 'CDLXXVI' },
    { arabic: 1789, roman: 'MDCCLXXXIX' },
    { arabic: 1999, roman: 'MCMXCIX' },
];

testValues.forEach(({ arabic, roman }) => {
    test(`${roman} is equal to ${arabic}`, () => expect(Converter.romanToArabic(roman)).toBe(arabic));
    test(`${arabic} is equal to ${roman}`, () => expect(Converter.arabicToRoman(arabic)).toBe(roman));
});
