import {test, expect} from '@playwright/test';
import { TenforceDashboardPage } from '../pages/dashboardTenforce';

let tenforceWebsite: TenforceDashboardPage;

test.beforeEach("Redirect on website Tenforce", async ({page}) => {
    //Verify webpage
    tenforceWebsite = new TenforceDashboardPage(page);
    await tenforceWebsite.goToHome(process.env.BASE_URL);
    
});

test("Verify Testnforce Dashboard and career flow", async ({page}) => {

    //Verify title of the page
    const title = await tenforceWebsite.verifyHomePageTitle();
    expect(title).toBe("EHS Software for Safety, Compliance & Operational Risk | TenForce");

    //verify career screen
    await tenforceWebsite.navigateToCareer();
    await tenforceWebsite.verifyCareerPage();

    //Verify life at Tenforce section
    await tenforceWebsite.navigateToLifeAtTenforce();
    await tenforceWebsite.verifyLifeAtTenforceSection();
    await tenforceWebsite.scrollDown();

    //Verify job opening section
    await tenforceWebsite.navigateToJobOpenings();
    await tenforceWebsite.verifyJobOpeningsSection();

});

