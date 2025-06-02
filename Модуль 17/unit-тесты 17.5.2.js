const { getPercents } = require('./path/to/your/module');

describe('getPercents', () => {
    test('should return 100 for 50% of 200', () => {
        expect(getPercents(50, 200)).toBe(100);
    });

    test('should return 0 for 0% of 1000', () => {
        expect(getPercents(0, 1000)).toBe(0);
    });

    test('should return 250 for 100% of 250', () => {
        expect(getPercents(100, 250)).toBe(250);
    });

    test('should throw error for non-numeric percent', () => {
        expect(() => getPercents('50', 200)).toThrow('Both percent and number must be numbers');
    });

    test('should throw error for non-numeric number', () => {
        expect(() => getPercents(50, '200')).toThrow('Both percent and number must be numbers');
    });

    test('should throw error for percent greater than 100', () => {
        expect(() => getPercents(150, 200)).toThrow('Percent must be between 0 and 100');
    });

    test('should throw error for negative percent', () => {
        expect(() => getPercents(-10, 200)).toThrow('Percent must be between 0 and 100');
    });

    test('should throw error for negative number', () => {
        expect(() => getPercents(50, -200)).toThrow('Number must be non-negative');
    });

    test('should return 0 for 0% of 0', () => {
        expect(getPercents(0, 0)).toBe(0);
    });

    test('should return 0 for 100% of 0', () => {
        expect(getPercents(100, 0)).toBe(0);
    });

    test('should return Infinity for 100% of Infinity', () => {
        expect(getPercents(100, Infinity)).toBe(Infinity);
    });
});
