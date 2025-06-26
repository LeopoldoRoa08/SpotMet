"use client";
import React from "react";

function PagoCorrecto() {
  return (
    <div className="flex overflow-hidden flex-col bg-zinc-100">
      <div className="pb-6 w-full bg-neutral-100 shadow-[0px_4px_10px_rgba(0,0,0,0.15)] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start px-11 w-full bg-zinc-100 max-md:px-5 max-md:max-w-full">
          <div className="flex self-start">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c38026be22641ba7b03c300f6c4f682a61fcc744?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
              className="object-contain shrink-0 self-start mr-0 max-w-full aspect-square w-[142px]"
              alt="Logo 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a002b7b916d204e74cf7852b9b208d16b62e7999?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
              className="object-contain shrink-0 max-w-full aspect-[1.03] w-[177px]"
              alt="Logo 2"
            />
          </div>
          <div className="flex gap-2 items-start my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2244eee61c86ad5995a8c588ef6e4612733ca15c?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
              className="object-contain shrink-0 mt-3.5 aspect-square w-[47px]"
              alt="Icon 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c20ecf9abcc8418328b9b565d312d57c7c4cabd5?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
              className="object-contain shrink-0 aspect-square w-[61px]"
              alt="Icon 2"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d88aab2b1b666849b92aba3f0d8946b35a76cb1?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
              className="object-contain shrink-0 aspect-[0.87] w-[46px]"
              alt="Icon 3"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-center px-20 pb-24 mt-7 max-w-full text-black bg-white rounded-3xl w-[882px] max-md:px-5">
        <div className="flex z-10 flex-col -mt-2.5 max-w-full w-[434px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc8fd4c1b1e49b9e54b206664dcf5988c5e05cc0?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
            className="object-contain mx-3 w-full rounded-full aspect-[1.63] max-md:mx-2.5"
            alt="Success banner"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e4f3a2e6431fb34ee76568d476fc1c19dbc02b0?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
            className="object-contain z-10 self-center -mt-5 max-w-full aspect-square w-[178px]"
            alt="Success icon"
          />
                    <div className="mt-2.5 text-5xl font-bold max-md:max-w-full max-md:text-4xl">
            Transacción Exitosa
          </div>
          <div className="self-center text-2xl text-center">
            Ir a mis reservas
          </div>
        </div>
      </div>
      <div className="flex relative flex-col px-16 py-24 mt-5 w-full text-xl text-center text-white min-h-[209px] max-md:px-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b708494abc0c92a344e20f877db113f79b8c86d?placeholderIfAbsent=true&apiKey=b3c1de37907348cdbf57798a458478a7"
          className="object-cover absolute inset-0 size-full"
          alt="Footer background"
        />
        <div className="relative z-10">
          Copyright © 2025 - Spotmet | Síguenos:{" "}
          <span style={{fontWeight: 700}}>Instagram</span> |{" "}
          <span style={{fontWeight: 700}}>Facebook</span>
        </div>
      </div>
    </div>
  );
}

export default PagoCorrecto;