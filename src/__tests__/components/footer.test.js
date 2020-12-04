import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "../../components";

describe("<Footer />", () => {
  it("renders the <Footer /> with populated data", () => {
    const { container, getByText } = render(
      <Footer>
        <Footer.Title>Questions ? Contact Us.</Footer.Title>
        <Footer.Break></Footer.Break>
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">FAQ</Footer.Link>
            <Footer.Link href="#">Investor Relations</Footer.Link>
            <Footer.Link href="#">Ways to Watch</Footer.Link>
            <Footer.Link href="#">Corporate Information</Footer.Link>
            <Footer.Link href="#">Netflix Originals</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Help Centre</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link htef="#">Account</Footer.Link>
            <Footer.Link htef="#">Redeem Gift Card</Footer.Link>
            <Footer.Link htef="#">Privacy</Footer.Link>
            <Footer.Link htef="#">Speed Test</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link htef="#">Buy Gift Cards</Footer.Link>
            <Footer.Link htef="#">Cookie Preferences</Footer.Link>
            <Footer.Link htef="#">Legal Notices</Footer.Link>
            <Footer.Link htef="#">Corporate Information</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Break></Footer.Break>
        <Footer.Text>Netflix United States</Footer.Text>
      </Footer>
    );

    expect(getByText("Questions ? Contact Us.")).toBeTruthy();
    expect(getByText("FAQ")).toBeTruthy();
    expect(getByText("Investor Relations")).toBeTruthy();
    expect(getByText("Ways to Watch")).toBeTruthy();
    expect(getByText("Account")).toBeTruthy();
    expect(getByText("Netflix Originals")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
