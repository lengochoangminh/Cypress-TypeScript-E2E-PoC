import { homePage } from "../pages/homePage";

describe("Home - IoT Dashboard", () => {
  beforeEach(() => {
    homePage.navigateTo();
  });

  it("Verify to toggle Light is OFF", () => {
    homePage.toggleLightOFF();
    homePage.validateLightStatus("OFF");
  });

  it("Verify to change the website theme to be Cosmic", () => {
    homePage.selectTheme("Cosmic");
    homePage.validateTheme();
  });
});
