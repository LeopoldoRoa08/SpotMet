"use client";
import * as React from "react";

function EditarPerfilDeUsuario() {
  return (
    <div className="relative w-full min-h-screen bg-neutral-100">
      <div className="flex relative justify-between items-center px-11 py-0 w-full shadow-sm bg-neutral-100 h-[166px] max-md:px-5 max-md:py-0 max-sm:px-4 max-sm:py-0 max-sm:h-[120px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d0067fd173bb827c4479bd61eadd581ece475b8?width=354"
          alt=""
          className="mt-0 h-[177px] w-[177px] max-sm:h-[120px] max-sm:w-[120px]"
        />
        <div className="flex gap-4 items-center mt-2.5 max-md:gap-2.5">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=\"686:298\" width=\"47\" height=\"47\" viewBox=\"0 0 47 47\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"user-icon\" style=\"width: 47px; height: 47px\"> <path d=\"M23.3591 23.3611C21.2177 23.3611 19.3845 22.5986 17.8596 21.0736C16.3346 19.5487 15.5721 17.7155 15.5721 15.5741C15.5721 13.4327 16.3346 11.5995 17.8596 10.0745C19.3845 8.54958 21.2177 7.78711 23.3591 7.78711C25.5005 7.78711 27.3337 8.54958 28.8587 10.0745C30.3836 11.5995 31.1461 13.4327 31.1461 15.5741C31.1461 17.7155 30.3836 19.5487 28.8587 21.0736C27.3337 22.5986 25.5005 23.3611 23.3591 23.3611ZM7.78516 38.935V33.4841C7.78516 32.381 8.06906 31.367 8.63686 30.4423C9.20466 29.5176 9.95902 28.8119 10.8999 28.3253C12.9116 27.3194 14.9557 26.5651 17.0322 26.0622C19.1087 25.5593 21.2177 25.3078 23.3591 25.3078C25.5005 25.3078 27.6095 25.5593 29.686 26.0622C31.7626 26.5651 33.8066 27.3194 35.8183 28.3253C36.7592 28.8119 37.5136 29.5176 38.0814 30.4423C38.6492 31.367 38.9331 32.381 38.9331 33.4841V38.935H7.78516ZM11.6786 35.0415H35.0396V33.4841C35.0396 33.1272 34.9503 32.8028 34.7719 32.5108C34.5934 32.2187 34.3582 31.9916 34.0662 31.8294C32.3141 30.9534 30.5458 30.2963 28.7613 29.8583C26.9768 29.4203 25.1761 29.2013 23.3591 29.2013C21.5421 29.2013 19.7414 29.4203 17.9569 29.8583C16.1724 30.2963 14.4041 30.9534 12.652 31.8294C12.36 31.9916 12.1248 32.2187 11.9463 32.5108C11.7679 32.8028 11.6786 33.1272 11.6786 33.4841V35.0415ZM23.3591 19.4676C24.4298 19.4676 25.3464 19.0863 26.1089 18.3239C26.8714 17.5614 27.2526 16.6448 27.2526 15.5741C27.2526 14.5034 26.8714 13.5868 26.1089 12.8243C25.3464 12.0618 24.4298 11.6806 23.3591 11.6806C22.2884 11.6806 21.3718 12.0618 20.6093 12.8243C19.8469 13.5868 19.4656 14.5034 19.4656 15.5741C19.4656 16.6448 19.8469 17.5614 20.6093 18.3239C21.3718 19.0863 22.2884 19.4676 23.3591 19.4676Z\" fill=\"#030027\"></path> </svg>",
              }}
            />
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=\"686:297\" width=\"46\" height=\"53\" viewBox=\"0 0 46 53\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 46px; height: 53px\"> <path d=\"M5.75 39.75V35.3333H40.25V39.75H5.75ZM5.75 28.7083V24.2917H40.25V28.7083H5.75ZM5.75 17.6667V13.25H40.25V17.6667H5.75Z\" fill=\"#EE5D08\"></path> </svg>",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex relative mx-auto my-0 w-full max-w-[1500px] min-h-[calc(100vh_-_375px)] max-md:flex-col">
        <div className="relative flex-1 px-32 pt-12 pb-0 max-md:px-10 max-md:pt-6 max-md:pb-0 max-sm:px-5 max-sm:pt-4 max-sm:pb-0">
          <div className="mb-20 text-4xl text-slate-950 max-sm:mb-10 max-sm:text-3xl">
            Editar Perfil
          </div>
          <div className="relative w-[965px] max-md:w-full">
            <div className="flex gap-11 mb-14 max-md:flex-col max-md:gap-6 max-md:mb-8">
              <div className="relative flex-1">
                <div className="mb-2 text-xl font-semibold text-slate-950 max-sm:text-base">
                  Nombre:
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    className="box-border px-5 py-0 w-full text-xl bg-white rounded-3xl border-[none] h-[57px] text-neutral-300 max-sm:px-4 max-sm:py-0 max-sm:h-12 max-sm:text-base"
                  />
                </div>
              </div>
              <div className="relative flex-1">
                <div className="mb-2 text-xl font-semibold text-slate-950 max-sm:text-base">
                  Contraseña:
                </div>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Ingrese su contraseña"
                    className="box-border px-5 py-0 w-full text-xl bg-white rounded-3xl border-[none] h-[57px] text-neutral-300 max-sm:px-4 max-sm:py-0 max-sm:h-12 max-sm:text-base"
                  />
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          "<svg id=\"586:223\" width=\"27\" height=\"20\" viewBox=\"0 0 27 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"eye-icon\" style=\"position: absolute; right: 18px; top: 50%; transform: translateY(-50%); width: 27px; height: 19px; cursor: pointer\"> <path d=\"M0 9.3125C0 9.3125 5.13982 3.10673 13.5 3.10673C14.6622 3.10673 15.757 3.23188 16.7866 3.43978L9.03273 9.97445C8.74328 9.44215 8.59262 8.86374 8.59091 8.27821C8.59091 7.30907 9.00205 6.42992 9.66477 5.72453C6.72914 6.56438 4.49305 8.19133 3.21668 9.3125C4.30397 10.2685 5.53323 11.1022 6.87395 11.7927L5.09073 13.2956C1.83723 11.5156 0 9.3125 0 9.3125ZM27 9.3125C27 9.3125 21.8602 15.5183 13.5 15.5183C12.339 15.5183 11.2467 15.39 10.2158 15.1842L4.90909 19.6555L3.06818 18.104L23.9318 0.520996L25.7727 2.07244L21.9105 5.32736C25.1603 7.10842 27 9.3125 27 9.3125ZM23.7907 9.31871C22.7015 8.36006 21.4692 7.52461 20.1248 6.8333L18.4091 8.27821C18.4091 9.37546 17.8919 10.4278 16.9713 11.2036C16.0506 11.9795 14.802 12.4154 13.5 12.4154L12.3378 13.3949C12.7182 13.4269 13.1036 13.4497 13.5 13.4497C18.3821 13.4497 22.021 10.8867 23.7907 9.31871Z\" fill=\"black\"></path> </svg>",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-11 mb-14 max-md:flex-col max-md:gap-6 max-md:mb-8">
              <div className="relative flex-1">
                <div className="mb-2 text-xl font-semibold text-slate-950 max-sm:text-base">
                  Apellido:
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ingrese su apellido"
                    className="box-border px-5 py-0 w-full text-xl bg-white rounded-3xl border-[none] h-[57px] text-neutral-300 max-sm:px-4 max-sm:py-0 max-sm:h-12 max-sm:text-base"
                  />
                </div>
              </div>
              <div className="relative flex-1">
                <div className="mb-2 text-xl font-semibold text-slate-950 max-sm:text-base">
                  Confirmar Contraseña:
                </div>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Confirme su contraseña"
                    className="box-border px-5 py-0 w-full text-xl bg-white rounded-3xl border-[none] h-[57px] text-neutral-300 max-sm:px-4 max-sm:py-0 max-sm:h-12 max-sm:text-base"
                  />
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          "<svg id=\"586:225\" width=\"27\" height=\"20\" viewBox=\"0 0 27 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"eye-icon\" style=\"position: absolute; right: 18px; top: 50%; transform: translateY(-50%); width: 27px; height: 19px; cursor: pointer\"> <path d=\"M0 9.48902C0 9.48902 5.13982 3.28325 13.5 3.28325C14.6622 3.28325 15.757 3.4084 16.7866 3.61629L9.03273 10.151C8.74328 9.61867 8.59262 9.04025 8.59091 8.45472C8.59091 7.48559 9.00205 6.60644 9.66477 5.90105C6.72914 6.74089 4.49305 8.36784 3.21668 9.48902C4.30397 10.445 5.53323 11.2787 6.87395 11.9693L5.09073 13.4721C1.83723 11.6921 0 9.48902 0 9.48902ZM27 9.48902C27 9.48902 21.8602 15.6948 13.5 15.6948C12.339 15.6948 11.2467 15.5665 10.2158 15.3607L4.90909 19.832L3.06818 18.2805L23.9318 0.69751L25.7727 2.24895L21.9105 5.50388C25.1603 7.28493 27 9.48902 27 9.48902ZM23.7907 9.49522C22.7015 8.53657 21.4692 7.70113 20.1248 7.00981L18.4091 8.45472C18.4091 9.55197 17.8919 10.6043 16.9713 11.3801C16.0506 12.156 14.802 12.5919 13.5 12.5919L12.3378 13.5714C12.7182 13.6034 13.1036 13.6262 13.5 13.6262C18.3821 13.6262 22.021 11.0632 23.7907 9.49522Z\" fill=\"black\"></path> </svg>",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-11 mb-14 max-md:flex-col max-md:gap-6 max-md:mb-8">
              <div className="relative flex-1">
                <div className="mb-2 text-xl font-semibold text-slate-950 max-sm:text-base">
                  Carrera:
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ingrese su Carrera"
                    className="box-border px-5 py-0 w-full text-xl bg-white rounded-3xl border-[none] h-[57px] text-neutral-300 max-sm:px-4 max-sm:py-0 max-sm:h-12 max-sm:text-base"
                  />
                </div>
              </div>
              <div className="relative flex-1">
                <div className="mb-2 text-xl font-semibold text-slate-950 max-sm:text-base">
                  Telefono:
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ingrese su telefono"
                    className="box-border px-5 py-0 w-full text-xl bg-white rounded-3xl border-[none] h-[57px] text-neutral-300 max-sm:px-4 max-sm:py-0 max-sm:h-12 max-sm:text-base"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mx-0 mt-24 mb-16">
            <button className="flex justify-center items-center bg-orange-600 cursor-pointer border-[none] h-[60px] rounded-[1000px] w-[326px] max-sm:mx-0 max-sm:mt-16 max-sm:mb-10 max-sm:h-[50px] max-sm:w-[280px]">
              <div className="text-4xl font-bold text-white max-sm:text-3xl">
                Guardar
              </div>
            </button>
          </div>
          <div className="flex gap-3 items-center cursor-pointer">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<svg id=\"716:490\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"back-arrow\" style=\"width: 24px; height: 24px\"> <path d=\"M7.825 11L20 11V13L7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11Z\" fill=\"#EA3323\"></path> </svg>",
                }}
              />
            </div>
            <div className="text-base font-bold text-black max-sm:text-sm">
              Inicio
            </div>
          </div>
        </div>
        <div className="relative mt-36 h-[993px] w-[404px] max-md:mt-10 max-md:w-full max-md:-order-1 max-md:h-[400px] max-sm:mt-5 max-sm:h-[300px]">
          <div className="absolute top-0 h-[993px] left-[22px] w-[359px] max-md:left-0 max-md:w-full max-md:h-[400px] max-sm:h-[300px]" />
          <div className="flex overflow-hidden absolute left-0 justify-center items-center h-[326px] top-[76px] w-[404px]">
            <div className="flex absolute gap-4 items-start h-[1244px] left-[-420px] top-[-420px] w-[1244px]">
              <div className="flex flex-col gap-4 items-start" />
              <div className="flex flex-col gap-4 items-start">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2e005deee054c04d0983f882eb92e7d6ab85d3b?width=808"
                  alt="Pattern"
                  className="flex justify-center items-center h-[404px] w-[404px]"
                />
              </div>
              <div className="flex flex-col gap-4 items-start" />
            </div>
          </div>
          <div className="flex absolute flex-col items-center left-[95px] top-[174px] max-md:left-2/4 max-md:-translate-x-2/4 max-md:top-[50px] max-sm:top-[30px]">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<svg id=\"585:144\" width=\"213\" height=\"213\" viewBox=\"0 0 213 213\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"profile-circle-bg\" style=\"width: 213px; height: 213px; position: absolute; top: 0\"> <circle cx=\"106.5\" cy=\"106.5\" r=\"106.5\" fill=\"white\"></circle> </svg>",
                }}
              />
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<svg id=\"585:145\" style=\"width:161px;height:161px;flex-shrink:0;border-radius:161px;background:url(<path-to-image class=\" profile-image\"=\"\">) lightgray 50% / cover no-repeat;position:absolute;left:1166px;top:342px\" width=\"161\" height=\"161\" viewBox=\"0 0 161 161\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <circle cx=\"80.5\" cy=\"80.5\" r=\"80.5\" fill=\"url(#pattern0_585_145)\"></circle> <defs> <pattern id=\"pattern0_585_145\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"> <use xlink:href=\"#image0_585_145\" transform=\"scale(0.00195312)\"></use> </pattern>  </defs> </svg>",
                }}
              />
            </div>
            <div className="mt-60 text-xl font-semibold text-center text-slate-950 w-[184px] max-sm:mt-44 max-sm:text-base max-sm:w-[150px]">
              Añadir Foto de Perfil
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-auto w-full h-[209px]">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=\"432:467\" width=\"1500\" height=\"209\" viewBox=\"0 0 1500 209\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"footer-bg\" style=\"width: 100%; height: 209px; position: absolute; top: 0; left: 0\"> <path d=\"M0 0H1500V209H0V0Z\" fill=\"#030027\"></path> <path d=\"M0 0H1500V209H0V0Z\" fill=\"#030027\"></path> </svg>",
            }}
          />
        </div>
        <div className="absolute left-2/4 text-xl text-center text-white -translate-x-2/4 h-[21px] top-[98px] w-[752px] max-sm:left-2/4 max-sm:text-sm max-sm:-translate-x-2/4 max-sm:w-[90%]">
          Copyright © 2025 - Spotmet | Síguenos:
          <span className="font-bold">Instagram</span> |
          <span className="font-bold">Facebook</span>
        </div>
      </div>
    </div>
  );
}

export default EditarPerfilDeUsuario;
