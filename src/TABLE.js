import React, { useState } from "react";
import { Table, ButtonGroup, Button } from "react-bootstrap";

const StrategyTable = () => {
  // Sample data

  const [slippage, setSlippage] = useState("0%"); // Default value for slippage

  // Sample data

  const strategies = [
    {
      rank: 1,
      name: "Selling with re entr",
      calmarRatio: 3.96,
      overallProfit: 381845,
      avgDailyProfit: 319.54,
      winPercentDay: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 2,
      name: "strategy_name", // Placeholder name, replace with actual strategy name
      calmarRatio: 3.62,
      overallProfit: 268872.5,
      avgDailyProfit: 216.31,
      winPercentDay: 0.64,
      price: "500",
      action: "Buy",
    },
    {
      rank: 3,
      name: "Based on premium and",
      calmarRatio: 3.42,
      overallProfit: 255425,
      avgDailyProfit: 208.51,
      winPercentDay: 0.64,
      price: "-",
      action: "View",
    },
    {
      rank: 4,
      name: "strategy_name", // Placeholder name, replace with actual strategy name
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercentDay: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 5,
      name: "strategy_name", // Placeholder name, replace with actual strategy name
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercentDay: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 6,
      name: "Based on premium wit",
      calmarRatio: 3.01,
      overallProfit: 135980,
      avgDailyProfit: 185.77,
      winPercentDay: 0.49,
      price: "-",
      action: "View",
    },
    {
      rank: 7,
      name: "strategy_name", // Placeholder name, replace with actual strategy name
      calmarRatio: 2.76,
      overallProfit: 267867.5,
      avgDailyProfit: 218.49,
      winPercentDay: 0.6,
      price: "-",
      action: "View",
    },
    {
      rank: 8,
      name: "Wait and trade_Save",
      calmarRatio: 2.62,
      overallProfit: 178252.5,
      avgDailyProfit: 161.9,
      winPercentDay: 0.63,
      price: "-",
      action: "View",
    },
    {
      rank: 9,
      name: "iron condor",
      calmarRatio: 2.44,
      overallProfit: 176420,
      avgDailyProfit: 137.51,
      winPercentDay: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 10,
      name: "strategy_name", // Placeholder name, replace with actual strategy name
      calmarRatio: 2.04,
      overallProfit: 244555,
      avgDailyProfit: 198.66,
      winPercentDay: 0.62,
      price: "-",
      action: "View",
    },
  ];
return (
  <>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "20px", // Add some space above the dropdown
        backgroundColor: "#D3D3D3",
      }}
    >
      <h4>Basic Backtest</h4>
      <div>
        <span style={{ backgroundColor: "#d3d3d3", height: "40px" }}>
          Slippage:{" "}
        </span>
        <select
          className="mr-4"
          value={slippage}
          onChange={(e) => setSlippage(e.target.value)}
        >
          <option value="0%">0%</option>
          <option value="1%">1%</option>
          <option value="2%">2%</option>
        </select>
      </div>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Center the table horizontally
        alignItems: "center", // Vertically center the table if needed
      }}
    >
      <Table
        striped
        bordered
        hover
        style={{ minWidth: "fit-content", maxWidth: "100%" }}
      >
        <thead>
          <tr>
            <th style={{ width: "80px" }}>Rank</th>
            <th style={{ width: "150px" }}>Name</th>
            <th style={{ width: "120px" }}>Calmar Ratio</th>
            <th style={{ width: "180px" }}>Overall Profit</th>
            <th style={{ width: "130px" }}>Avg. Daily Profit</th>
            <th style={{ width: "100px" }}>Win % (Day)</th>
            <th style={{ width: "120px" }}>Price (Rs)</th>
            <th style={{ width: "100px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {strategies.map((strategy, index) => (
            <tr key={index}>
              <td style={{ width: "80px" }}>{strategy.rank}</td>
              <td style={{ width: "150px" }}>{strategy.name}</td>
              <td style={{ width: "120px" }}>{strategy.calmarRatio}</td>
              <td style={{ width: "180px" }}>{strategy.overallProfit}</td>
              <td style={{ width: "130px" }}>{strategy.avgDailyProfit}</td>
              <td style={{ width: "100px" }}>{strategy.winPercentDay}</td>
              <td style={{ width: "120px" }}>{strategy.price}</td>
              <td style={{ width: "100px" }}>{strategy.action}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </>
);
};

export default StrategyTable;
