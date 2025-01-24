import React from 'react';

const Timeline = () => {
 const events = [
   { date: 'Jun. 2005', text: '滋賀県で生まれる' },
   { date: 'Apr. 2014', text: 'サッカーを始める' },
   { date: 'Apr. 2018', text: '陸上を始める' },
   { date: 'May. 2021', text: '弓道を始める' },
   { date: 'Apr. 2024', text: '専門学校に入学' },
   { date: 'Mar. 2028', text: '専門学校を卒業予定' },
 ];

 return (
   <>
     <p className="text-center mt-5">scroll</p>
     <div className="relative w-full max-w-4xl mx-auto p-8">
       <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white"></div>
       {events.map((event, index) => (
         <div key={index} className="relative mb-16">
           <div className="flex items-center">
             <div className={`flex-1 ${index % 2 === 0 ? 'text-right mr-44' : 'order-2 pl-20'}`}>
               <div className="inline-block border-2 border-white rounded-full p-4 ml-4">
                 <div className="text-sm text-white">{event.date.split(' ')[0]}</div>
                 <div className="text-lg font-bold text-white">{event.date.split(' ')[1]}</div>
               </div>
             </div>
             <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-white"></div>
             <div className={`absolute top-1/2 w-1/4 h-px bg-white ${index % 2 === 0 ? 'right-1/2' : 'left-1/2'}`}></div>
             <div className={`flex-1 ${index % 2 === 1 ? 'text-right pr-8' : 'order-2 mr-20 ml-20'}`}>
               <p className="text-white py-4">{event.text}</p>
             </div>
           </div>
         </div>
       ))}
     </div>
   </>
 );
};

export default Timeline;