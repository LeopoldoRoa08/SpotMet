
import React, { useEffect, useState } from 'react';
import './ReportesAdministrador.css';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function ReportesAdministrador() {
  const [reservas, setReservas] = useState([]);
  const [filtros, setFiltros] = useState({
    Finalizado: false,
    Pendiente: false,
    Cancelado: false,
  });
  const [fechaDesde, setFechaDesde] = useState('');
  const [fechaHasta, setFechaHasta] = useState('');

  useEffect(() => {
    const obtenerDatos = async () => {
      const snapshot = await getDocs(collection(db, 'reservas'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      const reservasAdaptadas = data.map((r) => ({
        id: r.id,
        espacio: r.spaceName || '',
        fecha: r.date || '',
        hora: (r.startTime && r.endTime) ? `${r.startTime} - ${r.endTime}` : '',
        usuario: r.eventName || '',
        estado: '', // no disponible
      }));
      setReservas(reservasAdaptadas);
    
    };
    obtenerDatos();
  }, []);

  const toggleFiltro = (estado) => {
    setFiltros(prev => ({ ...prev, [estado]: !prev[estado] }));
  };

  const cumpleFiltros = (reserva) => {
    const estadosActivos = Object.entries(filtros)
      .filter(([estado, activo]) => activo)
      .map(([estado]) => estado);
    const fechaReserva = new Date(reserva.fecha);
    const desde = fechaDesde ? new Date(fechaDesde) : null;
    const hasta = fechaHasta ? new Date(fechaHasta) : null;

    return (
      (estadosActivos.length === 0 || estadosActivos.includes(reserva.estado)) &&
      (!desde || fechaReserva >= desde) &&
      (!hasta || fechaReserva <= hasta)
    );
  };

  const reservasFiltradas = reservas.filter(cumpleFiltros);

  return (
    <div className="reportes-container">
      
    <div className="page-header">
      <h2>📊 Reportes</h2>
      <button className="btn-dashboard" onClick={() => window.location.href='/dashboard'}>Ir al Dashboard</button>
    </div>
    

      <div className="main-content">
        <div className="filtros-seccion">
          <h4>Estados</h4>
          {['Finalizado', 'Pendiente', 'Cancelado'].map((estado) => (
            <label key={estado}>
              <input
                type="checkbox"
                checked={filtros[estado]}
                onChange={() => toggleFiltro(estado)}
              />
              {estado}
            </label>
          ))}
          <h4>Rango de fechas</h4>
          <label>Desde:</label>
          <input type="date" value={fechaDesde} onChange={(e) => setFechaDesde(e.target.value)} />
          <label>Hasta:</label>
          <input type="date" value={fechaHasta} onChange={(e) => setFechaHasta(e.target.value)} />
        </div>

        <div className="resultados-seccion">
          {reservasFiltradas.length === 0 ? (
            <div className="mensaje-sin-reservas">📭 No hay reservas actualmente</div>
          ) : (
            <table className="tabla-reservas">
              <thead>
                <tr>
                  <th>Espacio</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Usuario</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {reservasFiltradas.map((reserva) => (
                  <tr key={reserva.id}>
                    <td>{reserva.espacio}</td>
                    <td>{reserva.fecha}</td>
                    <td>{reserva.hora}</td>
                    <td>{reserva.usuario}</td>
                    <td>{reserva.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReportesAdministrador;
