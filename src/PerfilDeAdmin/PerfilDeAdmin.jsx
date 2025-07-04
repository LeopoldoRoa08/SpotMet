import React from 'react';
import './PerfilDeAdmin.css';

const Header = () => {
  return (
    <div className="flex flex-col items-center px-16 w-full bg-neutral-100 shadow-[0px_4px_10px_rgba(0,0,0,0.15)] max-md:px-5 max-md:max-w-full">
      <div className="flex z-10 flex-wrap gap-5 justify-between -mb-1.5 w-full max-w-[1252px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a002b7b916d204e74cf7852b9b208d16b62e7999?placeholderIfAbsent=true&apiKey=a6087c1025124b4ea3e5b1a71e3cc15f"
          className="object-contain shrink-0 max-w-full aspect-[1.03] w-[177px]"
          alt="Logo"
        />
        <div className="flex gap-5 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4426b22577054f7ab2c351abf4057143024d196a?placeholderIfAbsent=true&apiKey=a6087c1025124b4ea3e5b1a71e3cc15f"
            className="object-contain shrink-0 aspect-[0.96] w-[65px]"
            alt="Navigation icon"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d88aab2b1b666849b92aba3f0d8946b35a76cb1?placeholderIfAbsent=true&apiKey=a6087c1025124b4ea3e5b1a71e3cc15f"
            className="object-contain shrink-0 my-auto aspect-[0.87] w-[46px]"
            alt="Profile icon"
          />
        </div>
      </div>
    </div>
  );
};

const BannerSection = () => {
  return (
    <div className="px-14 mt-6 w-full max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/72bb808f76e529802036366cc9f61cb29214cfb5?placeholderIfAbsent=true&apiKey=a6087c1025124b4ea3e5b1a71e3cc15f"
        className="object-contain w-full aspect-[4.81] rounded-[40px] max-md:max-w-full"
        alt="Banner"
      />
    </div>
  );
};

const DashboardNavigation = () => {
  return (
    <div className="flex gap-1.5 self-end text-base font-bold text-black whitespace-nowrap mt-[517px] max-md:mt-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true&apiKey=a6087c1025124b4ea3e5b1a71e3cc15f"
        className="object-contain shrink-0 w-6 aspect-square"
        alt="Dashboard icon"
      />
      <div className="my-auto">
        Dashboard
      </div>
    </div>
  );
};

const UserDataForm = () => {
  return (
    <div className="flex flex-col grow shrink-0 px-20 py-16 bg-white basis-0 rounded-[41px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] w-fit max-md:px-5 max-md:max-w-full">
      <div className="self-center text-xl font-semibold text-slate-950">
        Mis datos
      </div>

      <div className="flex flex-wrap gap-6 mt-16 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex flex-col flex-1 grow shrink-0 items-start py-3 pr-20 pl-4 rounded-xl basis-0 bg-neutral-100 w-fit max-md:pr-5">
          <div className="text-xs text-neutral-500">
            Nombres
          </div>
          <div className="text-xl font-medium text-black">
            Raúl Alejandro
          </div>
        </div>
        <div className="flex flex-col flex-1 grow shrink-0 items-start py-3 pr-20 pl-4 rounded-xl basis-0 bg-neutral-100 w-fit max-md:pr-5">
          <div className="text-xs text-neutral-500">
            Apellidos
          </div>
          <div className="text-xl font-medium text-black">
            Rodriguez Matos
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start py-3 pr-20 pl-4 mt-9 rounded-xl bg-neutral-100 max-md:pr-5 max-md:max-w-full">
        <div className="text-xs text-neutral-500">
          Número telefónico
        </div>
        <div className="text-xl font-semibold text-black">
          (0412) 123 45 67
        </div>
      </div>

      <div className="flex flex-col items-start py-3 pr-20 pl-4 mt-9 rounded-xl bg-neutral-100 max-md:pr-5 max-md:max-w-full">
        <div className="text-xs text-neutral-500">
          Correo electrónico
        </div>
        <div className="text-xl font-semibold text-black">
          prueba321@correo.unimet.edu.ve
        </div>
      </div>

      <div className="flex gap-1.5 self-center px-4 py-2.5 mt-14 max-w-full text-lg font-bold text-white bg-orange-600 rounded-xl w-[152px] max-md:mt-10">
        <div className="grow my-auto">
          Editar datos
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9699df56b7e6922dd6199e2a60cbaaca70b5e5e?placeholderIfAbsent=true&apiKey=a6087c1025124b4ea3e5b1a71e3cc15f"
          className="object-contain shrink-0 w-6 aspect-square"
          alt="Edit icon"
        />
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="flex flex-wrap gap-10 mt-9 ml-5 w-full max-w-[1135px] max-md:max-w-full">
      <DashboardNavigation />
      <UserDataForm />
    </div>
  );
};


const PerfilDeAdmin = () => {
  return (
    <div className="overflow-hidden bg-neutral-100">
      <Header />
      <BannerSection />
      <div className="px-14 w-full max-md:px-5 max-md:max-w-full">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default PerfilDeAdmin;
