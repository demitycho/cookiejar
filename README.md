# CookieJar

## About

CookieJar is a gamified savings and budgetin app.

Set a goal to meet(college loans, car loan), we will aggregate the data to intelligently determine a % of your savings to meet

Put your income with us, wager a small percentage of your monthly salary

If you meet your goal, you will get your wager back.

If you don't meet your goal, you will lose your wager, incentivising people to save in the long run


## Running the app

```
git clone github.com/demitycho/cookiejar.git
npm install
npm start
```

It will run on localhost:3000

## Proof of concept of Paypal API

Some code in `backend.js` can demonstrate our use of Paypal APIs

Payouts API - Used to pay wager winnings to winners
Paypal Sync API - Get past transaction details
Billing Agreements API - Monthly transfer of pay to PayPal account 
