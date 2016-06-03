var formHelper = require('../helpers/form-helpers');
//$ = require('cheerio');

module.exports = {
		'pslApplyPage': function(test) {
			test
				.log.message('School Picker Test: PSL Apply Page')
				.open('http://www.privatestudentloans.com/apply/');
				formHelper.fillInSchoolPicker(test);
				return test;
		},
        'pslApply1': function(test) {
			test
				.log.message('School Picker Test: PSL Apply Page')
				.open('http://www.privatestudentloans.com/apply1/');
				formHelper.fillInSchoolPicker(test);
				return test;
		},
		'pslHomepage': function(test) {
			test
				.log.message('School Picker Test: PSL Homepage')
				.open('http://www.privatestudentloans.com/');
				formHelper.fillInSchoolPicker(test);
				return test;
		},
        /*
		'fastwebIframe': function(test) {
			test
				.log.message('School Picker Test: Fastweb Iframe')
				.open('http://www.fastweb.com/student-loans');
				formHelper.fillInSchoolPicker(test);
				return test;
		},
        */
		'slcApplyPage': function(test) {
			test
				.log.message('School Picker Test: SLC Apply Page')
				.open('http://www.studentloanconsolidator.com/apply/');
				formHelper.fillInSchoolPicker(test);
				return test;
		},
        'spWin': function(test) {
			test
				.log.message('School Picker: SP Win Form')
				.open('http://www.scholarshippoints.com/win/');
				formHelper.fillInSchoolPicker(test);
				return test;
		},
        
}