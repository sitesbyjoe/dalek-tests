 module.exports = {
    'calc': function(test) {
        test
            .open('http://www.privatestudentloans.com/learn/repayment/loan-payment-calculator/')
            .waitForElement('article')
            .assert.exists('#psl-calc', 'Calculator has loaded')
            .type('input.amount', '100000')
            .wait(500)
            .click('.calculate')
            .waitForElement('.grand-totals')
            .wait(500)
            // check the values
            .assert.exists('.chart-principal', 'Chart has rendered')
            .assert.text('.chart-principal').is('$100,000.00', 'principal displaying properly')
            .wait(2000)
            .done();
    }
}