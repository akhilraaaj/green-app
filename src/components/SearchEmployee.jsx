import React, { useState } from 'react';
import employees from './employee';
import searchImg from '../search.png';

const SearchEmployee = ({ goToDashboard }) => {
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <div className="flex flex-col items-center text-white justify-center p-10">
        <>
          <div className="mb-4 flex items-center justify-center">
            <img src="moptro-logo.png" height={70} width={70} alt="header-img" />
          </div>
        
          <div className="flex items-center justify-center w-full max-w-lg relative">
        <input placeholder="Search with name" type="text" onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          className="text-[#FFFFFF] placeholder:text-[#FFFFFF] bg-[#1F191966] rounded-full w-full px-4 py-2"
        />
        <img src={searchImg} alt="search" className="absolute right-8 h-6 w-6" />
      </div>

          <div className="flex flex-wrap justify-center mt-10">
            {employees
              .filter((val) => {
                if (searchTerm === '') {
                  return val;
                } else {
                  return val.name.toLowerCase().includes(searchTerm.toLowerCase());
                }
              })
              .map((employee) => (
                <div key={employee.id} className="p-4 max-w-sm">
                  <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col relative">
                    <h2 className="absolute top-0 right-0 mt-2 mr-2 border border-black px-2 rounded-full">{employee.id}</h2>
                    <h2 className="text-white">EMP ID<span className='ml-1'>: </span><span className='ml-2 font-bold'>{employee.id}</span></h2>
                    <h2 className="text-white">Name <span className='ml-2'>: </span> <span className='ml-2 font-semibold'>{employee.name}</span></h2>
                    <h2 className="text-white">DOB<span className='ml-6'>: </span> <span className='ml-2 font-semibold text-yellow-700'>{employee.dob}</span></h2>
                    <h2 className="text-white">Role<span className='ml-6'>: </span> <span className='ml-2 font-semibold text-[#36A546]'>{employee.role}</span></h2>
                  </div>
                </div>
              ))}
          </div>

          {employees.filter((val) => {
            if (searchTerm === '') {
              return val;
            } else {
              return val.name.toLowerCase().includes(searchTerm.toLowerCase());
            }
          }).length === 0 && (
            <h1 className="text-red-500 font-bold mb-2">Can't find employee!</h1>
          )}
        </>
    </div>
  );
};

export default SearchEmployee;