/**
 * Suite of tests for basic PSL website pieces
 *
 * @author jtaylor@edvisors.com
 * @date 2015-01-13
 *
 */
var formHelper = require('../helpers/form-helpers');

 module.exports = {
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
		.assert.exists('.lender-first-form', 'CU Student Loans form is displaying')
		.back()
		//.assert.url.is('http://www.privatestudentloans.com/', 'back to the homepage')
		.done();
	}
 }