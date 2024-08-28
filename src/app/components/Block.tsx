import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Folder from './Folder';
import { IoClose } from 'react-icons/io5';
import { FiUpload } from 'react-icons/fi';
import { NotesCon } from '../providers/NotesProvider';
import { useRouter } from 'next/navigation';


const Block =() =>{

    const FOLDERS = [
        {
          name: 'CS',
        },

      
      ];



      const [displayBlocks, setDisplayBlocks] = useState([
        {
          name: 'CS',
        }

      
      ]);

      // Function to add a new block
      const addBlock = () => {
        if (displayBlocks.length < FOLDERS.length) {
          const nextBlock = FOLDERS[displayBlocks.length];
          setDisplayBlocks([...displayBlocks, nextBlock]);
        }
      };


      return (
        <div className="flex flex-col gap-8 w-full">
          <div className="flex justify-between text-2xl">
            <p className="">Notebooks</p>
            <button
              onClick={() =>{setDisplayBlocks([...displayBlocks,        {
                name: 'CS',
              }])}}
              className="px-3 py-1 rounded-lg bg-orange-600 text-white"
            >
              +
            </button>
          </div>

          <div className="folderContainer flex overflow-x-scroll scroll-smooth place-self-auto w-full ">
            {displayBlocks.map((item, index) => (
              <Folder folderName={item.name} key={index} />
            ))}
          </div>
        </div>
      );

}
export default Block;
//folderContainer grid grid-rows-1 overflow-x-scroll scroll-smooth grid-flow-col justify-between w-full