// 'use client';

// import Marquee from 'react-fast-marquee';

// export default function DepositMarquee() {
//   return (
//     <div
//       className="w-full border rounded-xl p-2"
//       style={{ backgroundColor: '#37C280', color: 'var(--color-black)', borderWidth: 0 }}
//     >
//       <Marquee gradient={false} speed={50} direction="right">
//         <span className="mr-8">17000+ Total attendees - 900+ Local Business Heroes - 150+ Educational Institutions - 200+ Keynote Speakers - 30+ Investors in Attendance </span>
//         <span className="mr-8">17000+ Total attendees - 900+ Local Business Heroes - 150+ Educational Institutions - 200+ Keynote Speakers - 30+ Investors in Attendance </span>
//         <span className="mr-8">17000+ Total attendees - 900+ Local Business Heroes - 150+ Educational Institutions - 200+ Keynote Speakers - 30+ Investors in Attendance </span>
//         <span>17000+ Total attendees - 900+ Local Business Heroes - 150+ Educational Institutions - 200+ Keynote Speakers - 30+ Investors in Attendance </span>
//       </Marquee>
//     </div>
//   );
// }



'use client';

import Marquee from 'react-fast-marquee';
import { ChevronRight } from 'lucide-react';

export default function DepositMarquee() {
  return (




    <div className='px-2 md:px-10 py-5'>
    <div
      className="w-full rounded-3xl p-2 flex items-center "
      style={{ backgroundColor: '#00D28A', color: 'var(--color-black)' }}
    >
      {/* Fixed "button" on the left */}
      <div className="flex items-center gap-1 px-4 lg:font-normal py-2 rounded-full md:font-semibold cursor-default select-none flex-shrink-0" style={{backgroundColor:"#202020",color:"#FFFFFF"}}>
        ScaleUp Numbers
      </div>
      <ChevronRight size={30} style={{color:"#FFFFFF"}}/>

      {/* Scrolling marquee */}
      <div className="flex-1 overflow-hidden">
        <Marquee gradient={false} speed={50} direction="right">
          <span className="mr-8">
            17000+ Total attendees | 900+ Local Business Heroes | 150+ Educational Institutions | 200+ Keynote Speakers | 30+ Investors in Attendance
          </span>
          <span className="mr-8">
            17000+ Total attendees | 900+ Local Business Heroes | 150+ Educational Institutions | 200+ Keynote Speakers | 30+ Investors in Attendance
          </span>
          <span className="mr-8">
          17000+ Total attendees | 900+ Local Business Heroes | 150+ Educational Institutions | 200+ Keynote Speakers | 30+ Investors in Attendance
          </span>
        </Marquee>
      </div>
    </div>
    </div>
  );
}
