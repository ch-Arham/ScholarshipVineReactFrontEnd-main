import React from "react";
import { xmlData } from "./xmlData";
import ScholarshipCard from "./ScholarshipCard";

const Initial = () => {
  return (
    <div style={{}}>
      <h1 className="text-center py-2">Sign up for our premium services</h1>
      <p className="text-center">
        <a href="/payment">
          This service uses AI backed intelligent Scholarship Cloud to help you
          gain access to the world's best Scholarships and grants
        </a>
      </p>
      <h2 className="pb-2 pt-2">Grants New Opportunity List by Agency</h2>
      {xmlData.rss.channel.item.map((data, index) => {
        return <ScholarshipCard key={index} data={data} />;
      })}
    </div>
  );
};

export default Initial;
