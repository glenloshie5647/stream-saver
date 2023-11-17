filename: marketingAnalytics.js

/*
   marketingAnalytics.js - This code performs complex marketing analytics calculations
*/

// Function to calculate conversion rate
function calculateConversionRate(conversions, visits) {
  return (conversions / visits) * 100;
}

// Function to calculate ROI
function calculateROI(profit, investment) {
  return ((profit - investment) / investment) * 100;
}

// Function to calculate average session duration
function calculateAverageSessionDuration(totalDuration, totalSessions) {
  return totalDuration / totalSessions;
}

// Function to estimate customer lifetime value
function estimateCustomerLifetimeValue(avgPurchaseValue, avgPurchaseFrequency, churnRate) {
  return avgPurchaseValue * avgPurchaseFrequency * (1 / churnRate);
}

// Function to calculate customer acquisition cost
function calculateCAC(totalMarketingCosts, newCustomersAcquired) {
  return totalMarketingCosts / newCustomersAcquired;
}

// Class representing a marketing campaign
class MarketingCampaign {
  constructor(name, startDate, endDate, budget) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.budget = budget;
  }

  calculateDaysRemaining() {
    const today = new Date();
    const daysRemaining = Math.floor(
      (this.endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysRemaining;
  }
}

// Example usage of the code
const conversions = 500;
const visits = 10000;
const conversionRate = calculateConversionRate(conversions, visits);
console.log("Conversion Rate: " + conversionRate.toFixed(2) + "%");

const profit = 1000;
const investment = 500;
const roi = calculateROI(profit, investment);
console.log("ROI: " + roi.toFixed(2) + "%");

const totalDuration = 6000;
const totalSessions = 100;
const averageSessionDuration = calculateAverageSessionDuration(totalDuration, totalSessions);
console.log("Average Session Duration: " + averageSessionDuration + " seconds");

const avgPurchaseValue = 50;
const avgPurchaseFrequency = 4;
const churnRate = 0.2;
const clv = estimateCustomerLifetimeValue(avgPurchaseValue, avgPurchaseFrequency, churnRate);
console.log("Customer Lifetime Value: $" + clv.toFixed(2));

const totalMarketingCosts = 10000;
const newCustomersAcquired = 1000;
const cac = calculateCAC(totalMarketingCosts, newCustomersAcquired);
console.log("Customer Acquisition Cost: $" + cac.toFixed(2));

const campaign = new MarketingCampaign(
  "Summer Sale Campaign",
  new Date(2022, 6, 1),
  new Date(2022, 8, 31),
  5000
);
const daysRemaining = campaign.calculateDaysRemaining();
console.log("Days Remaining in Campaign: " + daysRemaining);