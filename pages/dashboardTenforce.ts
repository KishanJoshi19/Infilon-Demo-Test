import {Page, Locator} from '@playwright/test';

export class TenforceDashboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Actions mention in this section
  async goToHome(BASE_URL: string | undefined) {
    const url = BASE_URL || "https://www.tenforce.com/";
    await this.page.goto(url);
  }

  async navigateToCareer() {
    const aboutUsLink = this.page.getByRole('link', { name: 'About Us' });
    await aboutUsLink.click();
    const careerLink = this.page.getByRole('link', { name: 'Career' });
    await careerLink.click();
  }

  async navigateToLifeAtTenforce() {
    const lifeAtLink = this.page.getByRole('navigation').getByRole('link', { name: 'Life at TenForce' });
    await lifeAtLink.click();
  }

  async scrollDown() {
    await this.page.mouse.wheel(0, 1000);
  }

  async navigateToJobOpenings() {
    const jobOpenings = this.page.locator('a:has-text("Job Openings")').first();
    await jobOpenings.click();
  }

  // Navigation and page stability
  async verifyHomePageTitle() {
    //await this.page.waitForLoadState('networkidle');
    return this.page.title();
  }

  async verifyCareerPage() {
    await this.page.waitForURL(/career/i);
  }

  async verifyLifeAtTenforceSection() {
    await this.page.waitForURL(/#people/);
  }

  async verifyJobOpeningsSection() {
    //await this.page.waitForLoadState('networkidle');
    const text = this.page.getByText('Feel free to send your CV');
    await text.waitFor({ state: 'visible' });
  }
}