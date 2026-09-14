const fs = require('fs');
const path = require('path');

let p = path.join(__dirname, 'components/Overview.jsx');
let content = fs.readFileSync(p, 'utf8');

// Replace the boxes container to use a smaller gap
content = content.replace('className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 sm:mt-8 pt-6', 'className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 sm:mt-8 pt-6');

// Replace Box 1
let oldBox1 = `<div className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[20px] sm:text-[23px] font-bold text-[#004B87] leading-tight uppercase">~24 Acres</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[13px] sm:text-[14px] text-gray-500 font-bold leading-normal mt-0.5 uppercase tracking-wide">TOTAL PROJECT AREA</span>
                </div>`;
let newBox1 = `<div className="flex flex-col justify-center">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[18px] sm:text-[22px] font-bold text-[#004B87] leading-tight uppercase block">~24</span>
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[16px] sm:text-[20px] font-bold text-[#004B87] leading-tight uppercase block">ACRES</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[11px] sm:text-[12px] text-gray-500 font-bold leading-normal mt-1 uppercase tracking-wide block">TOTAL<br/>PROJECT AREA</span>
                </div>`;
content = content.replace(oldBox1, newBox1);

// Replace Box 2
let oldBox2 = `<div className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[20px] sm:text-[23px] font-bold text-[#004B87] leading-tight uppercase">9 Towers (3 Gold) </span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[13px] sm:text-[14px] text-gray-500 font-bold leading-normal mt-0.5 uppercase tracking-wide">TOWERS</span>
                </div>`;
let newBox2 = `<div className="flex flex-col justify-center">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[18px] sm:text-[22px] font-bold text-[#004B87] leading-tight uppercase block">9</span>
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[15px] sm:text-[18px] font-bold text-[#004B87] leading-tight uppercase block">TOWERS<br/>(3 GOLD)</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[11px] sm:text-[12px] text-gray-500 font-bold leading-normal mt-1 uppercase tracking-wide block">TOWERS</span>
                </div>`;
content = content.replace(oldBox2, newBox2);

// Replace Box 3
let oldBox3 = `<div className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[20px] sm:text-[23px] font-bold text-[#004B87] leading-tight uppercase">844 Apartments</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[13px] sm:text-[14px] text-gray-500 font-bold leading-normal mt-0.5 uppercase tracking-wide">TOTAL RESIDENCES</span>
                </div>`;
let newBox3 = `<div className="flex flex-col justify-center">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[18px] sm:text-[22px] font-bold text-[#004B87] leading-tight uppercase block">844</span>
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[16px] sm:text-[19px] font-bold text-[#004B87] leading-tight uppercase block">APARTMENTS</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[11px] sm:text-[12px] text-gray-500 font-bold leading-normal mt-1 uppercase tracking-wide block">TOTAL RESIDENCES</span>
                </div>`;
content = content.replace(oldBox3, newBox3);

// Tweak padding and gaps in boxes to make them fit better
content = content.replace(/className="flex items-center gap-4 p-4 sm:p-5/g, 'className="flex items-center gap-2 p-3 sm:p-4');
// Adjust icon size slightly
content = content.replace(/className="w-8 h-8 sm:w-9 sm:h-9/g, 'className="w-7 h-7 sm:w-8 sm:h-8');

fs.writeFileSync(p, content, 'utf8');
