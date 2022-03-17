import React from 'react'
import {xmlData} from './xmlData';
import ScholarshipCard from './ScholarshipCard';

const Initial = () => {

  return (
    <div style={{}}>
    <h1 className='pb-2 pt-2'>Grants New Opportunity List by Agency</h1>
      {
        xmlData.rss.channel.item.map((data,index)=>{
          return (
            <ScholarshipCard key={index} data={data} />
          )
        })
      }
      
    </div>
  )
}

export default Initial