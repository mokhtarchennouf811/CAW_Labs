function mean(p) {
    var sum =0;
    for (let i = 0; i < p.length; i++) {
        sum =sum+ p[i];
    }
    const result = sum/p.length;
    console.log(result)
    return result;
}
mean([1,2,2,5,3]);

module.exports = mean;

