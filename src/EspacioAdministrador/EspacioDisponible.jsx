"use client";
import * as React from "react";
import './EspacioDisponible.css';
import { useNavigate, Link } from 'react-router-dom';

function EspaciosDisponible() {
  return (
    <div className="container">
     

      <div className="titleSection">
        Espacios disponibles
      </div>

      <div className="mainContent">
        <div className="createButton">
          <div className="createButtonText">
            Crear nuevo espacio
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/43088dafe1133bb262ab65a23550d91b626404c4?placeholderIfAbsent=true"
            className="createButtonIcon"
            alt="Add icon"
          />
        </div>

        <div className="spacesGrid">
          <div className="gridRow">
            <div className="gridColumn">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/a0ee292eb61d4d48256ea3b93a9493621634bc4d?placeholderIfAbsent=true"
                className="spaceImage"
                alt="Space"
              />
            </div>
            <div className="gridColumn">
              <div className="featuredSpace">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/a2b2b063d75ff3056a4a156e465fc992cba57394?placeholderIfAbsent=true"
                  className="featuredSpaceBackground"
                  alt="Laboratorio background"
                />
                <div className="featuredSpaceContent">
                  <div className="spaceCategory">
                    Laboratorio
                  </div>
                  <div className="spaceTitle">
                    Laboratorio Experimental
                    <br />
                    del Metaverso
                  </div>
                  <div className="spaceCapacity">
                    Capacidad: 200 personas
                  </div>
                  <div className="editSection">
                    <div className="editText">
                      Editar
                    </div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/c9699df56b7e6922dd6199e2a60cbaaca70b5e5e?placeholderIfAbsent=true"
                      className="editIcon"
                      alt="Edit icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="gridColumn">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/aca931eae2e570d553c4ca14a29fe91c695e1152?placeholderIfAbsent=true"
                className="spaceImage"
                alt="Space"
              />
            </div>
          </div>
        </div>

        <div className="spacesGridSecond">
          <div className="gridRow">
            <div className="gridColumn">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/5ce25b4e7e63909c40d17006a77efd5bd98be154?placeholderIfAbsent=true"
                className="spaceImage"
                alt="Space"
              />
            </div>
            <div className="gridColumn">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/e937f147e32e658f3f3ac19f58ddf5ef5f9893d7?placeholderIfAbsent=true"
                className="spaceImage"
                alt="Space"
              />
            </div>
            <div className="gridColumn">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/d3a52f72dfb7e31fc13f9081f5d2f3080dfaa6fe?placeholderIfAbsent=true"
                className="spaceImage"
                alt="Space"
              />
            </div>
          </div>
        </div>

        <div className="dashboardLink">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true"
            className="dashboardIcon"
            alt="Dashboard icon"
          />
          <div className="dashboardText">
            Dashboard
          </div>
        </div>
      </div>

      
       
      </div>
  
  );
}

export default EspaciosDisponible;