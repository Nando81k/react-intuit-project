import React from 'react';
import './Analysis.css';
import './CompanyBackground.css';
import backgroundImage from '../assets/output.png'; // adjust the file name/path as needed

const Analysis = () => (
  <section id="analysis" className="analysis">
    <h2>Key Findings & Insights</h2>
    <div className="analysis-content">
      <div className="text-content">
        <div className="subsection">
          <h3>Challenges & Opportunities</h3>
          <p>
          <strong>Artificial Intelligence (AI) Integration:</strong> Intuit has been proactively integrating AI into its financial tools to enhance user experience. The company forecasts fiscal 2025 revenue to surpass Wall Street estimates, driven by increased demand for AI-powered financial tools. This includes personalized financial recommendations and automation features.
          </p>
          <br></br>
          <p>
          <strong>Financial Performance:</strong> Despite economic uncertainties, Intuit reported strong fiscal second-quarter earnings, with adjusted earnings per share at $3.32 and sales of $3.96 billion, both surpassing analysts' expectations. The company's stock price has been on an upward trajectory, reflecting investor confidence in Intuit's growth prospects.
          </p>
        </div>
        <div className="subsection">
          <h3>Comparisons</h3>
          <p>
          <strong>Financial Performance Comparison:</strong> Intuit's financial performance has outperformed its competitors, such as H&R Block and Square. The company's revenue growth, profit margins, and return on equity are higher than industry averages, reflecting its strong market position and growth potential. When comparing Intuit to its competitors, several key financial metrics provide insight into its market position:
  
            <ul>
              <li><strong>Revenue Growth:</strong> Intuit's revenue growth of 14.67% exceeds the industry average of 11.64%, indicating strong sales performance and market outperformance.</li>
              <li><strong>Gross Profit:</strong> Intuit's gross profit of $2.22 billion is 1.54 times above that of its industry, highlighting stronger profitability and higher earnings from its core operations.</li>
              <li><strong>Debt-to-Equity Ratio:</strong> Intuit has a lower debt-to-equity ratio of 0.38 compared to its top peers, indicating a more favorable balance between debt and equity.</li>
            </ul>
            </p>
        </div>
      <div className="graph-content">
        <h2>Revenue Graph</h2>
        <figure className="graph-with-caption">
          <img src={backgroundImage} alt="Revenue Graph" />
          <figcaption>
            Graph showing Intuit's revenue growth over the past 2 decades
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
  </section>
);

export default Analysis;

