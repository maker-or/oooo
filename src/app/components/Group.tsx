'use client';
import React from 'react';
import StorageContainer from './StorageContainer';
import Block from './Block';

const Group = () => {
  return (
    <div className="overflow-hidden h-full w-full">
      <h1 className="text-[12rem] absolute z-0">
        <img src="Sphere.png" alt="" />
      </h1>
      <div className="relative z-10">
        
        <Block/>
      </div>
    </div>
  );
};

export default Group;
