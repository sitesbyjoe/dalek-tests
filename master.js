/**
 * running the full suite of tests from one master file
 * 
 * @author jtaylor@edvisors.com
 * @date 2015-01-28
 * 
 * Note: if you plan to run tests from here instead of individually, you 
 * need to change the last lines of each test from:
 * 
 * .assert.text('element').is('$100,000.00', 'principal displaying properly')
 * .done();
 * 
 * to:
 * 
 * .assert.text('.chart-principal').is('$100,000.00', 'principal displaying properly');
 * return test;
 * 
 */

var schoolpickers = require('./general/schoolpickers');
var emailFields = require('./general/email-fields');
var psl = require('./privatestudentloans.com/psl');
var sp = require('./scholarshippoints.com/scholarshippoints');

module.exports = {
    'Release Tests': function(test) {
    	schoolpickers.pslApplyPage(test);
    	schoolpickers.pslHomepage(test);
    	schoolpickers.fastwebIframe(test);
    	schoolpickers.slcApplyPage(test);
    	emailFields.pslCitizensLenderFirstForm(test);
    	emailFields.pslCollegeAveLenderFirstForm(test);
    	emailFields.pslOfferWallCollegeAve(test);
    	emailFields.slcApplyForm(test);
    	psl.genericApplyFlow(test);
    	psl.lenderFirstForms(test);
    	// leaving these 2 out since I can't guarantee that they'll appear on production
        //psl.sallieMaeApplyFlow(test);
        //psl.collegeAveApplyFlow(test);
        psl.calculator.calc(test);
        sp.joinForm(test);
        sp.winForm(test);
        sp.widget(test);
        done();
    }   
}