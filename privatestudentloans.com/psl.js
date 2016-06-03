/**
 * Suite of tests for basic PSL website pieces
 *
 * @author jtaylor@edvisors.com
 * @date 2015-01-13
 *
 */
var formHelper = require('../helpers/form-helpers');

 module.exports = {
	'genericApplyFlow': function(test) {
		test
		.log.message('PSL Apply Flow Test - Non-Lender specific')
		// open the apply page
        .open('http://www.privatestudentloans.com/apply/');
        formHelper.fillInSchoolPicker(test)
        .submit('#form_schoolCode')
        .waitForElement('h1')
        .assert.text('h1').is('Private loan options for Babson College', 'h1 test is correct')
        .assert.exists('.offer-wrapper', 'Some kind of offer exists')
        .assert.exists('.offer-button', 'Some kind of offer button exists')
        .click('.button');
        return test;
	},
	
	'lenderFirstForms': function(test) {
		test
		.log.message('PSL Lender First Forms Test: Checking Links on Homepage')
		.open('http://www.privatestudentloans.com/')
		.waitForElement('.lender-logo-banner')
		.assert.exists('.lender-logo-banner', 'lender logos are displaying')
		// check for college loan
		.assert.exists('.lender-logo-banner a[data-name="college-ave"]')
		.click('.lender-logo-banner a[data-name="college-ave"]')
		.waitForElement('form.college-ave-lender-form')
		.assert.exists('form.college-ave-lender-form', 'College Ave Lender First Form is displaying')
		.back()
		// sallie mae
		.assert.exists('.lender-logo-banner a[data-name="sallie"]')
		.click('.lender-logo-banner a[data-name="sallie"]')
		.assert.exists('.lender-first-form', 'Sallie Mae form is displaying')
		.back()
		// suntrust
		.assert.exists('.lender-logo-banner a[data-name="suntrust"]')
		.click('.lender-logo-banner a[data-name="suntrust"]')
		.assert.exists('.lender-first-form', 'Suntrust form is displaying')
		.back()
		// PNC
		.assert.exists('.lender-logo-banner a[data-name="pnc"]')
		.click('.lender-logo-banner a[data-name="pnc"]')
		.assert.exists('.lender-first-form', 'PNC form is displaying')
		.back()
		// Citizens
		.assert.exists('.lender-logo-banner a[data-name="citizens"]')
		.click('.lender-logo-banner a[data-name="citizens"]')
		.assert.exists('.lender-first-form', 'Citizens form is displaying')
		.back()
		// CU Student Loans
		.assert.exists('.lender-logo-banner a[data-name="cu-student-loans"]')
		.click('.lender-logo-banner a[data-name="cu-student-loans"]')
		.assert.exists('.lender-first-form', 'CU Student Loans form is displaying');
		return test;
	},
	
    'sallieMaeApplyFlow': function(test) {
        test
        .log.message('PSL Apply Flow Test: Sallie Mae from Apply Page')
        // open the apply page
        .open('http://www.privatestudentloans.com/apply/');
        formHelper.fillInSchoolPicker(test)
        .submit('#form_schoolCode')
        .waitForElement('h1')
        .assert.text('h1').is('Private loan options for Babson College', 'h1 test is correct')
        .assert.exists('.offer-wrapper.salliemae', 'Sallie Mae offer exists')
        .assert.exists('img[onload="track_apply_to_salliemae1_GAImpression();"]', 'Sallie Mae impression pixel exists')
        .click('a[href="track_apply_to_salliemae1_GAClick();"]');
        return test;
    },
    
    'collegeAveApplyFlow': function(test) {
        test
        .log.message('PSL Apply Flow Test: College Ave from Apply Page')
        .open('http://www.privatestudentloans.com/apply/');
        formHelper.fillInSchoolPicker(test)
        .submit('#form_schoolCode')
        .waitForElement('h1')
        .assert.text('h1').is('Private loan options for Babson College', 'h1 test is correct')
        .assert.exists('.offer-wrapper.collegeave', 'College Ave offer exists')
        // now we need to fill in the form
        .type('.college-ave-first-name', 'John')
        .type('.college-ave-last-name', 'Smith')
        .type('.college-ave-email', 'johnsmith@edvisors.com')
        .wait(2000)
        .submit('.college-ave-form')
        .wait(2000);
        return test;
    },
    
    'calculator': function(test) {
        test
        	.log('PSL Calculator Basic LoanTest')
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
            .assert.text('.chart-principal').is('$100,000.00', 'principal displaying properly');
        	return test;
    }
}