const { LinearRegression } = require("./LinearRegression")

// Create sample dataset
const xData = [1,2,3]
const yData = [1,2,5]

// Initialize linear regression entity
linear_regresssion_model = new LinearRegression()
// Train a regression model
linear_regresssion_model.fit(xData, yData)

// Predict data for new input values
console.log(`
    Predicted y for x=${20}: 
    ${linear_regresssion_model.predict(20)}
`);
console.log(`
    Predicted y for x=${5}: 
    ${linear_regresssion_model.predict(5)}
`);
console.log(`
    Predicted y for x=${1}:
    ${linear_regresssion_model.predict(1)}
`);