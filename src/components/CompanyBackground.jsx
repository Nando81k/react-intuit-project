import React from 'react';
import './CompanyBackground.css';
import backgroundImage from '../assets/Intuit-products.avif'; // adjust the file name/path as needed

const CompanyBackground = () => (
  <section id="company-background" className="company-background">
    <h2>Company Background</h2>
    <div className="company-background-content">
      <div className="text-content">
        <div className="subsection">
          <h3>History and Background</h3>
          <p>
            Intuit was founded in 1983 on a dining room table in Palo Alto, California with the goal of
            making balancing checkbooks easier. The first Intuit product was a software called Quicken. The purpose of Quicken was to help the founder of Intuits' wife balance the family checkbook. Over the years, it has moved
            away from Desktop apps and software like Quicken to cloud based
            solutions like QuickBooks and TurboTax. Intuit has since expanded its product offerings to include a range of financial tools and services for individuals and businesses, including accounting software, tax preparation software, and personal finance management tools. The company has grown to become a leader in the financial technology industry, serving millions of customers worldwide. Intuit's commitment to innovation and customer satisfaction has helped it establish a strong brand presence and drive growth in the industry.
          </p>
        </div>
        <div className="subsection">
          <h3>Mission and Vision</h3>
          <p>
            ​Intuit's mission is to "power prosperity around the world." This
            mission reflects the company's commitment to leveraging technology
            to help customers achieve financial success by putting more money in
            their pockets, saving them time, and instilling confidence in their
            financial decisions.
          </p>
        </div>
        <div className="subsection">
          <h3>Target Demographic</h3>
          <p>
            Intuit primarily targets the following demographics:
            <ul>
              <li>Small business owners</li>
              <li>Self-employed individuals</li>
              <li>Accountants and tax professionals</li>
              <li>Individuals looking to manage their personal finances</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="image-content">
        <figure className="image-with-caption">
          <img src={backgroundImage} alt="Company background" />
          <figcaption>
            All 4 of Intuit Verticals Currently Being Supported
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
);

export default CompanyBackground;
