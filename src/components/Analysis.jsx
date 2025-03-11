import React from 'react';
import './Analysis.css';
import stonks from '../assets/stonks-gif.gif'; // adjust the file name/path as needed

const Analysis = () => (
  <section id="analysis-background" className="analysis-background">
    <h2>Analysis</h2>
    <div className="analysis-content">
      <div className="text-content">
        <div className="subsection">
          <h3>Implications</h3>
          <p>
            Judging by Intuit's revenue growth and market share over the years, it is clear that the company has solved a problem that many people face. The company's focus on user experience and customer satisfaction has helped it establish a strong brand presence in the financial technology industry. Intuit's innovative solutions have helped millions of individuals and businesses manage their finances more effectively, and its commitment to leveraging technology to help customers achieve financial success has set it apart from competitors. Intuit's emphasis on AI integration and personalized financial recommendations has positioned it for continued growth and success in the future. Even the data in the graph has shown a stable and linear growth in revenue over the past 2 decades. It wouldn't be a stretch to say that Intuit is a company that is here to stay and still has moe room to grow.
          </p>
        </div>
        <div className="subsection">
          <h3>Impact</h3>
          <p>
            ​Intuit's impact has been significant in the financial technology
            industry. The company's innovative solutions have helped millions of
            individuals and businesses manage their finances more effectively.
            Intuit's emphasis on user experience and customer satisfaction has set
            it apart from competitors and established its reputation as a leader in
            the industry. The amount of people that have been able to use Intuit's
            products to manage their finances has been a game changer for the industry, thus making Intuit and it's four verticals MailChimp, QuickBooks, TurboTax, and Mint (previously), household names.
          </p>
        </div>
      </div>
      <div className="image-content">
        <figure className="image-with-caption">
          <img src={stonks} alt="Company background" />
          <figcaption>
            Intuit to the MOON!
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
);

export default Analysis;
