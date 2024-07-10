class LinearRegression {
    constructor() {
        this.numerator = 0
        this.denominator = 0
    }
    // define fit function which will be used to train a model
    fit(X, y) {
        // Calculate means for input, training data
        const xMean = X.reduce((sum, val) => sum + val, 0) / X.length;
        const yMean = y.reduce((sum, val) => sum + val, 0) / y.length;

        // reset numerator and denominator
        this.numerator = 0;
        this.denominator = 0;

        // loop over set X and calculate numerator and denominator
        // according to linear regression formula
        for (let i = 0; i < X.length; i++) {
            this.numerator += (X[i] - xMean) * (y[i] - yMean);
            this.denominator += (X[i] - xMean) ** 2;
        }
        // Calculate slope and y-intercept used for predictions
        this.slope = this.numerator / this.denominator;
        this.yIntercept = yMean - this.slope * xMean;
    }

    // define predict dunction which is going to be used 
    // to predict values for new datas
    predict(X) {
        return this.slope * X + this.yIntercept;
    }
}
// export module
module.exports = { LinearRegression }