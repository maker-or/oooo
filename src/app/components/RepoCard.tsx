import React from 'react';
import Link from 'next/link';
import { IoFolderOpen } from 'react-icons/io5';
import { MdArrowOutward } from 'react-icons/md';

const RepoCard = ({ name, url }: { name: string; url: string }) => {
  return (
    <Link
      href={`/repo/data/${url}`}
      className="flex w-full items-center justify-between p-4 border-[1px] border-[#f7eee37f] rounded-xl transition-all text-[1.5rem] "
    >
      <div className="flex gap-4 items-center">
        <IoFolderOpen size={36} color='#CAECFC'/>
        <p>{name}</p>
      </div>
      <div className="">
        <MdArrowOutward size={48}/>
      </div>
    </Link>
  );
};

export default RepoCard;
