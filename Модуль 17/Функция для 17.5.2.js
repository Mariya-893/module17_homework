function getPercents(percent, number) {
    if (typeof percent !== 'number' || typeof number !== 'number') {
        throw new Error('Both percent and number must be numbers');
    }
    if (percent < 0 || percent > 100) {
        throw new Error('Percent must be between 0 and 100');
    }
    if (number < 0) {
        throw new Error('Number must be non-negative');
    }
    return (percent / 100) * number;
}
