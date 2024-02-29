import React from "react";

function Introduction() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="h-[60px] border-r-[1px] mt-[-20px]"></div>
      <div className="w-[5px] h-[5px] bg-zinc-800 rounded-full"></div>
      <h2 className="mt-5 text-black font-medium text-[13px] tracking-widest">
        HELLO! MY NAME IS
      </h2>
      <h2 className="text-[50px] font-bold text-black tracking-widest text-center">
        MUHAMMAD IRHAM
      </h2>
      <h2 className="mt-5 text-black font-medium text-[13px] tracking-widest">
        ON THE WAY TO BECOMING FULLSTACK DEVELOPER
      </h2>
      <img src="/avatar_photo.jpeg" className="w-[160px] h-[160px] p-6 rounded-full bg-slate-700 shadow-lg shadow-cyan-500/50 mt-5" alt="" />
    </div>
  );
}

export default Introduction;
