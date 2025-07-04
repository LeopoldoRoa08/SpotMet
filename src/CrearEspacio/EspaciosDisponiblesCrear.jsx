"use client";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './EspaciosDisponiblesCrear.module.css';

function EspaciosDisponiblesCrear() {
  return (
    <div className={styles.container}>

      <div className={styles.mainContent}>
        <div className={styles.sectionTitle}>
          Completa datos
        </div>

        <div className={styles.imageUploadSection}>
          <div className={styles.imageUploadContent}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e78e288345c0e2b59dcba451896622584a33de?width=424"
              alt=""
              className={styles.uploadIcon}
            />
            <div className={styles.uploadText}>
              Añadir imagenes
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <div className={styles.inputField}>
            <div className={styles.inputText}>
              Nombre del Espacio
            </div>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputFieldSmall}>
              <div className={styles.inputText}>
                Capacidad Máxima de personas
              </div>
            </div>
            <div className={styles.inputFieldSmall}>
              <div className={styles.inputText}>
                Precio de alquiler
              </div>
            </div>
            <div className={styles.inputFieldSmall}>
              <div className={styles.inputText}>
                Tipo de Espacio
              </div>
            </div>
          </div>

          <div className={styles.textareaField}>
            <div className={styles.inputText}>
              Ingresa la Descripción del Espacio
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.createButton}>
              <div className={styles.buttonText}>
                Crear nuevo espacio
              </div>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      "<svg id=\"625:636\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"plus-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z\" fill=\"white\"></path> </svg>",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.backLink}>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=\"710:362\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"back-arrow\" style=\"width: 24px; height: 24px\"> <path d=\"M7.825 11L20 11V13L7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11Z\" fill=\"#EA3323\"></path> </svg>",
              }}
            />
          </div>
          <div className={styles.backText}>
            Dashboard
          </div>
        </div>
      </div>

    </div>
  );
}

export default EspaciosDisponiblesCrear;
