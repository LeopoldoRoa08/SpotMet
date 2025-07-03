"use client";
import * as React from "react";
import './EspacioDisponible.css';
import { useNavigate, Link } from 'react-router-dom';

function EspaciosDisponible() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/d819bf538d8415ba3ff5fc3bd1d37f27d56c00f2?placeholderIfAbsent=true"
            className={styles.logo}
            alt="Logo"
          />
          <div className={styles.navigation}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/4426b22577054f7ab2c351abf4057143024d196a?placeholderIfAbsent=true"
              className={styles.navIcon}
              alt="Navigation icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/5d88aab2b1b666849b92aba3f0d8946b35a76cb1?placeholderIfAbsent=true"
              className={styles.navIconSmall}
              alt="Navigation icon"
            />
          </div>
        </div>
      </div>

      <div className={styles.titleSection}>
        Espacios disponibles
      </div>

      <div className={styles.mainContent}>
        <div className={styles.createButton}>
          <div className={styles.createButtonText}>
            Crear nuevo espacio
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/43088dafe1133bb262ab65a23550d91b626404c4?placeholderIfAbsent=true"
            className={styles.createButtonIcon}
            alt="Add icon"
          />
        </div>

        <div className={styles.spacesGrid}>
          <div className={styles.gridRow}>
            <div className={styles.gridColumn}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/a0ee292eb61d4d48256ea3b93a9493621634bc4d?placeholderIfAbsent=true"
                className={styles.spaceImage}
                alt="Space"
              />
            </div>
            <div className={styles.gridColumn}>
              <div className={styles.featuredSpace}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/a2b2b063d75ff3056a4a156e465fc992cba57394?placeholderIfAbsent=true"
                  className={styles.featuredSpaceBackground}
                  alt="Laboratorio background"
                />
                <div className={styles.featuredSpaceContent}>
                  <div className={styles.spaceCategory}>
                    Laboratorio
                  </div>
                  <div className={styles.spaceTitle}>
                    Laboratorio Experimental
                    <br />
                    del Metaverso
                  </div>
                  <div className={styles.spaceCapacity}>
                    Capacidad: 200 personas
                  </div>
                  <div className={styles.editSection}>
                    <div className={styles.editText}>
                      Editar
                    </div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/c9699df56b7e6922dd6199e2a60cbaaca70b5e5e?placeholderIfAbsent=true"
                      className={styles.editIcon}
                      alt="Edit icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.gridColumn}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/aca931eae2e570d553c4ca14a29fe91c695e1152?placeholderIfAbsent=true"
                className={styles.spaceImage}
                alt="Space"
              />
            </div>
          </div>
        </div>

        <div className={styles.spacesGridSecond}>
          <div className={styles.gridRow}>
            <div className={styles.gridColumn}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/5ce25b4e7e63909c40d17006a77efd5bd98be154?placeholderIfAbsent=true"
                className={styles.spaceImage}
                alt="Space"
              />
            </div>
            <div className={styles.gridColumn}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/e937f147e32e658f3f3ac19f58ddf5ef5f9893d7?placeholderIfAbsent=true"
                className={styles.spaceImage}
                alt="Space"
              />
            </div>
            <div className={styles.gridColumn}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/d3a52f72dfb7e31fc13f9081f5d2f3080dfaa6fe?placeholderIfAbsent=true"
                className={styles.spaceImage}
                alt="Space"
              />
            </div>
          </div>
        </div>

        <div className={styles.dashboardLink}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true"
            className={styles.dashboardIcon}
            alt="Dashboard icon"
          />
          <div className={styles.dashboardText}>
            Dashboard
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b3c1de37907348cdbf57798a458478a7/2b708494abc0c92a344e20f877db113f79b8c86d?placeholderIfAbsent=true"
          className={styles.footerBackground}
          alt="Footer background"
        />
        <div className={styles.footerContent}>
          Copyright © 2025 - Spotmet | Síguenos:{" "}
          <span className={styles.footerBold}>Instagram</span> |{" "}
          <span className={styles.footerBold}>Facebook</span>
        </div>
      </div>
    </div>
  );
}

export default EspaciosDisponible;
