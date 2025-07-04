import React from "react";
import "./VerEspaciosGeneral.css";


// Integrated Arrow6 component
const Arrow6 = ({ className }) => {
  return (
    <svg
      className={`arrow-6 ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 39 28"
      width="39"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3 14C14.88 14 29.95 14 36 14M36 14L25.3929 2.5M36 14L25.3929 25.5"
        stroke="#030027"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
    </svg>
  );
};

// Integrated Search component
const Search = ({ opacity = "0.5", className }) => {
  return (
    <svg
      className={`search ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10ZM13.594 16.0082C12.5434 16.6379 11.314 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.8276 16.2996 13.4916 15.1526 14.7383L19.2071 18.7929C19.5976 19.1834 19.5976 19.8166 19.2071 20.2071C18.8166 20.5976 18.1834 20.5976 17.7929 20.2071L13.594 16.0082Z"
        fill="black"
        fillRule="evenodd"
      />

      <path
        className="path"
        clipRule="evenodd"
        d="M15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10ZM13.594 16.0082C12.5434 16.6379 11.314 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.8276 16.2996 13.4916 15.1526 14.7383L19.2071 18.7929C19.5976 19.1834 19.5976 19.8166 19.2071 20.2071C18.8166 20.5976 18.1834 20.5976 17.7929 20.2071L13.594 16.0082Z"
        fill="#2A59FE"
        fillOpacity="0.3"
        fillRule="evenodd"
      />

      <path
        className="path"
        clipRule="evenodd"
        d="M15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10ZM13.594 16.0082C12.5434 16.6379 11.314 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.8276 16.2996 13.4916 15.1526 14.7383L19.2071 18.7929C19.5976 19.1834 19.5976 19.8166 19.2071 20.2071C18.8166 20.5976 18.1834 20.5976 17.7929 20.2071L13.594 16.0082Z"
        fill="white"
        fillOpacity={opacity}
        fillRule="evenodd"
      />
    </svg>
  );
};

// Integrated Menu2 component
const Menu2 = ({ color = "#EE5D08", className }) => {
  return (
    <svg
      className={`menu-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
        fill={color}
      />
    </svg>
  );
};

// Integrated TypeBasicWrapper component
const TypeBasicWrapper = ({ type, className, text = "Search" }) => {
  return (
    <div className={`type-basic-wrapper ${className}`}>
      <div className="frame">
        <Search className="search-1" opacity="0.5" />
        <div className="text-wrapper">{text}</div>
      </div>
    </div>
  );
};

// Main component
export const VerEspaciosGeneral = () => {
  return (
    <div className="ver-espacios-general" data-model-id="276:37">
      <div className="div">
        <div className="text-wrapper-2">Ver espacios</div>

        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="rectangle" />

              <div className="rectangle-2" />

              <div className="card-go-to-info">
                <div className="text-wrapper-3">Más información</div>

                <Arrow6 className="arrow" />
              </div>

              <p className="p">
                Permanece abierta las 24 horas del día, y ofrece a los
                estudiantes la posibilidad de su uso para las actividades
                académicas, y realizar trabajos en grupo con mayor informalidad.
              </p>

              <div className="text-wrapper-4">Sala 24 horas</div>

              <img
                className="sala"
                alt="Sala"
                src="https://c.animaapp.com/vqVWvgRh/img/sala-24-3-1@2x.png"
              />
            </div>
          </div>

          <div className="group">
            <div className="overlap-group">
              <div className="rectangle" />

              <div className="rectangle-2" />

              <div className="card-go-to-info">
                <div className="text-wrapper-3">Más información</div>

                <Arrow6 className="arrow" />
              </div>

              <p className="p">
                Permanece abierta las 24 horas del día, y ofrece a los
                estudiantes la posibilidad de su uso para las actividades
                académicas, y realizar trabajos en grupo con mayor informalidad.
              </p>

              <div className="text-wrapper-4">Sala 24 horas</div>

              <img
                className="sala"
                alt="Sala"
                src="https://c.animaapp.com/vqVWvgRh/img/sala-24-3-1@2x.png"
              />
            </div>
          </div>

          <img
            className="img"
            alt="Group"
            src="https://c.animaapp.com/vqVWvgRh/img/group-14.png"
          />
        </div>

        <img
          className="group-2"
          alt="Group"
          src="https://c.animaapp.com/vqVWvgRh/img/group-12.png"
        />

        <div className="overlap-2">
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="rectangle" />

              <div className="rectangle-2" />

              <div className="card-go-to-info">
                <div className="text-wrapper-3">Más información</div>

                <Arrow6 className="arrow" />
              </div>

              <div className="text-wrapper-5">Auditorios</div>

              <p className="text-wrapper-6">
                Área que tiene lugar múltiples actividades destinadas al fomento
                y disfrute de la cultura, la ciencia, la recreación y el
                esparcimiento.
              </p>

              <img
                className="lidera"
                alt="Lidera"
                src="https://c.animaapp.com/vqVWvgRh/img/lidera-6-2-1@2x.png"
              />
            </div>
          </div>

          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="rectangle" />

              <div className="rectangle-2" />

              <div className="card-go-to-info">
                <div className="text-wrapper-3">Más información</div>

                <Arrow6 className="arrow" />
              </div>

              <div className="text-wrapper-5">Auditorios</div>

              <p className="text-wrapper-6">
                Área que tiene lugar múltiples actividades destinadas al fomento
                y disfrute de la cultura, la ciencia, la recreación y el
                esparcimiento.
              </p>

              <img
                className="lidera"
                alt="Lidera"
                src="https://c.animaapp.com/vqVWvgRh/img/lidera-6-2-1@2x.png"
              />
            </div>
          </div>

          <img
            className="group-3"
            alt="Group"
            src="https://c.animaapp.com/vqVWvgRh/img/group-15.png"
          />
        </div>

        <img
          className="group-4"
          alt="Group"
          src="https://c.animaapp.com/vqVWvgRh/img/group-13.png"
        />

        <div className="overlap-4">
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="rectangle" />

              <div className="rectangle-2" />

              <div className="card-go-to-info">
                <div className="text-wrapper-3">Más información</div>

                <Arrow6 className="arrow" />
              </div>

              <div className="text-wrapper-7">Salones</div>

              <img
                className="whatsapp-image"
                alt="Whatsapp image"
                src="https://c.animaapp.com/vqVWvgRh/img/whatsapp-image-2025-05-13-at-21-58-46-1bfeff77-1-1@2x.png"
              />

              <p className="text-wrapper-8">
                Espacios acondicionados con mobiliario básico, superficie de
                proyección/escritura e iluminación adecuada, diseñado para
                instrucción grupal, reuniones o talleres.
              </p>
            </div>
          </div>

          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="rectangle" />

              <div className="rectangle-2" />

              <div className="card-go-to-info">
                <div className="text-wrapper-3">Más información</div>

                <Arrow6 className="arrow" />
              </div>

              <div className="text-wrapper-7">Salones</div>

              <img
                className="whatsapp-image"
                alt="Whatsapp image"
                src="https://c.animaapp.com/vqVWvgRh/img/whatsapp-image-2025-05-13-at-21-58-46-1bfeff77-1-1@2x.png"
              />

              <p className="text-wrapper-8">
                Espacios acondicionados con mobiliario básico, superficie de
                proyección/escritura e iluminación adecuada, diseñado para
                instrucción grupal, reuniones o talleres.
              </p>
            </div>
          </div>

          <img
            className="group-3"
            alt="Group"
            src="https://c.animaapp.com/vqVWvgRh/img/group-16.png"
          />
        </div>

        <img
          className="group-5"
          alt="Group"
          src="https://c.animaapp.com/vqVWvgRh/img/group-9.png"
        />

        <div className="overlap-5">
          <div className="text-wrapper-9">Nuestros espacios</div>

          <div className="rectangle-3" />

          <img
            className="image"
            alt="Image"
            src="https://c.animaapp.com/vqVWvgRh/img/image-2.png"
          />

          <div className="text-wrapper-9">Nuestros espacios</div>

          <div className="rectangle-3" />

          <img
            className="image"
            alt="Image"
            src="https://c.animaapp.com/vqVWvgRh/img/image-2.png"
          />

          <div className="text-wrapper-10">Nuestros 
            espacios</div>
        </div>


        <div className="overlap-group-wrapper">
          <div className="overlap-7">
            <TypeBasicWrapper
              className="search-instance"
              text="Buscar espacio..."
              type="basic"
            />
            <TypeBasicWrapper
              className="search-instance"
              text="Buscar espacio..."
              type="basic"
            />
            <TypeBasicWrapper
              className="design-component-instance-node"
              text="Buscar espacio..."
              type="basic"
            />
          </div>
        </div>

        

        <div className="overlap-9">
          <div className="text-wrapper-12">&gt;</div>

          <div className="text-wrapper-13">Tipo de Espacio</div>
        </div>

        <div className="overlap-10">
          <div className="text-wrapper-14">&gt;</div>

          <div className="text-wrapper-13">Ubicación</div>
        </div>

        <div className="text-wrapper-15">Inicio</div>

        <img
          className="frame-4"
          alt="Frame"
          src="https://c.animaapp.com/vqVWvgRh/img/frame-2.svg"
        />
      </div>
    </div>
  );

};
export default VerEspaciosGeneral;
