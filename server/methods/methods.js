import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  updateStockData(symbol, attributes) {
    // Return dummy data based on the requested attributes
    const dummyData = {
      incomeStatement: [{ year: 2023, revenue: 110000, income: 55000 }],
      balanceSheet: [{ year: 2023, assets: 210000, liabilities: 105000 }],
      cashFlow: [{ year: 2023, cashFlow: 35000 }],
      segment: [{ region: 'US', revenue: 75000 }],
    };
    return attributes.reduce((acc, attr) => ({ ...acc, [attr]: dummyData[attr] }), {});
  },
  getJsonData(fileName) {
    check(fileName, String);

    // Determine file extension
    const isJavaScript = ['calendar', 'products', 'review'].includes(fileName);
    const fileExtension = isJavaScript ? 'js' : 'json';

    const filePath = `../data/${fileName}.${fileExtension}`;

    // Handle .js and .json files differently
    if (isJavaScript) {
      // If .js file, require the module and return the default export
      const moduleData = require(filePath);
      return moduleData.default || moduleData;
    } else {
      // For .json files, read and parse the content
      return JSON.parse(Assets.getText(filePath));
    }
  },
});
