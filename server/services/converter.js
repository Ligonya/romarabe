/**
 * Service permettant de convertir un nombre romain en un nombre arabe (et inversement).
 */
class Converter {
    // Liste des chiffres romains.
    static numbers = {
        i: 1,
        iv: 4, v: 5,
        ix: 9, x: 10,
        l: 50, xc: 90,
        c: 100, cd: 400,
        d: 500, cm: 900,
        m: 1000
    };

    /**
     * Fonction convertissant un nombre romain en un nombre arabe.
     *
     * @param {string} romanNumber Un nombre romain entre 1 et 3999.
     *
     * @returns {number}
     */
    static romanToArabic (romanNumber) {
        if (!(romanNumber && romanNumber.length))
            return 0;

        const [
            firstChar,
            secondChar = '',
            ...otherChars
        ] = romanNumber.toLowerCase();

        return secondChar.length && this.numbers.hasOwnProperty(firstChar + secondChar)
            ? this.numbers[firstChar + secondChar] + this.romanToArabic(otherChars.join(''))
            : this.numbers[firstChar] + this.romanToArabic(secondChar + otherChars.join(''));
    }

    /**
     * Fonction convertissant un nombre arabe en un nombre romain.
     *
     * @param {number} arabicNumber
     *
     * @throws {TypeError} Le nombre arabe doit etre un entier.
     * @throws {RangeError} Le nombre arabe doit être compris entre 0 et 4000 exclus.
     *
     * @returns {string}
     */
    static arabicToRoman (arabicNumber) {
        if (typeof arabicNumber === 'string')
            arabicNumber = parseInt(arabicNumber);

        if (!Number.isInteger(arabicNumber))
            throw new TypeError('Le nombre arabe doit etre un entier.');

        const min = 0, max = 4000;
        if (arabicNumber < min || arabicNumber >= max)
            throw new RangeError(`Le nombre arabe doit être compris entre ${min} et ${max} exclus.`);

        for (let i = 0; i < Object.keys(this.numbers).length; i++) {
            const key = Object.keys(this.numbers).reverse()[i];
            const value = this.numbers[key];

            // division euclidienne
            const quotient = Math.floor(arabicNumber / value);
            const remainder = arabicNumber % value;

            if (quotient)
                return (key.repeat(quotient)).toUpperCase() + this.arabicToRoman(remainder);
        }

        return '';
    }
}

module.exports = Converter;
