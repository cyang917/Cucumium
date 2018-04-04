var reporter = require('cucumber-html-reporter')
const browser = process.env.SELENIUM_BROWSER || 'chrome'
const env = process.env.ENV_URL || 'https://www.pwc.com'
const device = process.env.EMU_DEVICE || process.env.DEVICE_NAME
const type = device ? 'Mobile' : 'Desktop'
const tag = process.env.AUTO_TAG || process.argv.slice(-1)[0]

var options = {
        theme: 'bootstrap',
        jsonFile: './reports/cucumber_report.json',
        output: './reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "Test Environment": env,
            "Browser": browser,
            "Platform": type,
            "Tag": tag
        }
    };
 
    reporter.generate(options);