import React from "react";
import "./ReportesAdministrador.css";

function ReportesAdministrador() {
  return (
    <div className="reportes-container">
      
        <div className="header-content">
          <div className="logo-container">
           
           
        
          <div className="nav-icons">
            
              
            
          </div>
        </div>
      </div>
      <div className="page-title">
        Reportes
      </div>
      <div className="main-content">
        <div className="content-wrapper">
          <div className="layout-container">
            <div className="sidebar-column">
              <div className="sidebar-content">
                <div className="estados-title">
                  Estados
                </div>
                <div className="filters-card">
                  <div className="filters-header">
                    <span className="filters-text">Filtros </span>
                    <span className="filters-arrow">v</span>
                  </div>
                  <div className="filter-option">
                    <div className="checkbox" />
                    <div className="filter-label">Finalizado</div>
                  </div>
                  <div className="filter-option">
                    <div className="checkbox" />
                    <div className="filter-label">Pendiente</div>
                  </div>
                  <div className="filter-option">
                    <div className="checkbox" />
                    <div className="filter-label">Cancelado</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-column">
              <div className="table-section">
                <div className="table-header">
                  <div className="header-espacio">Espacio</div>
                  <div className="header-right">
                    <div className="header-reservas">N° de reservas</div>
                    <div className="header-estados">Estados</div>
                  </div>
                </div>
                <div className="table-content">
                  <div className="table-row">
                    <div className="row-content">
                      <div className="space-name">Sala 24 horas</div>
                      <div className="row-right">
                        <div className="reservation-count">12</div>
                        <div className="status-finalizado">Finalizado</div>
                      </div>
                    </div>
                  </div>
                  <div className="row-divider" />
                  <div className="table-row">
                    <div className="row-content">
                      <div className="space-name">Centro Mundo X</div>
                      <div className="row-right">
                        <div className="reservation-count">22</div>
                        <div className="status-finalizado">Finalizado</div>
                      </div>
                    </div>
                  </div>
                  <div className="row-divider" />
                  <div className="table-row">
                    <div className="row-content">
                      <div className="space-name">Aula - 302</div>
                      <div className="row-right">
                        <div className="reservation-count">7</div>
                        <div className="status-cancelado">Cancelado</div>
                      </div>
                    </div>
                  </div>
                  <div className="row-divider" />
                  <div className="table-row">
                    <div className="row-content">
                      <div className="space-name">SL - 003 Lab. de Redes</div>
                      <div className="reservation-count-single">2</div>
                      <div className="status-pendiente">Pendiente</div>
                    </div>
                  </div>
                  <div className="row-divider" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="date-range-title">Rango de fechas</div>
        <div className="date-input">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d6e2403be85759e0c77c29cd9d0f0c86772f4a1?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
            className="calendar-icon"
          />
          <div className="date-text">Desde v</div>
        </div>
        <div className="date-input">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d6e2403be85759e0c77c29cd9d0f0c86772f4a1?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
            className="calendar-icon"
          />
          <div className="date-text">Hasta v </div>
        </div>
        <div className="dashboard-link">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
            className="dashboard-icon"
          />
          <div className="dashboard-text">Dashboard</div>
        </div>
      </div>
      
        
         
         
        </div>
      
    
  );
}

export default ReportesAdministrador;