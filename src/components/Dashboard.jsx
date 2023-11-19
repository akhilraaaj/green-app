import React from 'react';

const Dashboard = ({ goToSearchEmployee }) => {

  return (
    <div className="flex flex-col items-center text-white justify-center p-10 w-full max-w-4xl xl:max-w-6xl">
      <>
      <div className="mb-4 flex items-center justify-center">
       <img src="moptro-logo.png" height={70} width={70} alt="header-img" />
      </div>
       <div className="w-full max-w-xl items-center justify-center">
        <div className="flex flex-col items-center justify-center text-gray-400 text-lg bg-[#1F191966] rounded-full w-full max-w-xl mx-auto px-4 py-3">
            Employee Productivity Dashboard
        </div>

      <div className='bg-[#131C19] rounded-lg p-4 mt-4 mb-4'>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1>Productivity on Monday</h1>
          <h1 className='text-[#36A54680] font-bold'>4%</h1>
        </div>
        <div className="rounded-full">
          <div className="bg-[#36A54680] border border-[#36A546] p-1.5 leading-none rounded-full" style={{ width: "4%" }}></div>
        </div>
        <div className="flex justify-between items-center">
          <h1>Productivity on Tuesday</h1>
          <h1 className='text-[#36A54680] font-bold'>92%</h1>
        </div>
        <div className="rounded-full">
          <div className="bg-[#36A54680] border border-[#36A546] p-1.5 leading-none rounded-full" style={{ width: "92%" }}></div>
        </div>
        <div className="flex justify-between items-center">
          <h1>Productivity on Wednesday</h1>
          <h1 className='text-[#36A54680] font-bold'>100%</h1>
        </div>
        <div className="rounded-full">
          <div className="bg-[#36A54680] border border-[#36A546] p-1.5 leading-none rounded-full" style={{ width: "100%" }}></div>
        </div>
        <div className="flex justify-between items-center">
          <h1>Productivity on Thursday</h1>
          <h1 className='text-[#36A54680] font-bold'>93%</h1>
        </div>
        <div className="rounded-full">
          <div className="bg-[#36A54680] border border-[#36A546] p-1.5 leading-none rounded-full" style={{ width: "93%" }}></div>
        </div>
        <div className="flex justify-between items-center">
          <h1>Productivity on Friday</h1>
          <h1 className='text-[#36A54680] font-bold'>89%</h1>
        </div>
        <div className="rounded-full">
          <div className="bg-[#36A54680] border border-[#36A546] p-1.5 leading-none rounded-full" style={{ width: "89%" }}></div>
        </div>
        <div className="flex justify-between items-center">
          <h1>Productivity on Saturday</h1>
          <h1 className='text-[#36A54680] font-bold'>98%</h1>
        </div>
        <div className="rounded-full">
          <div className="bg-[#36A54680] border border-[#36A546] p-1.5 leading-none rounded-full" style={{ width: "98%", height: "10%" }}></div>
        </div>
      </div>
    </div>
    </div>
    </>
    </div>
  );
};

export default Dashboard;