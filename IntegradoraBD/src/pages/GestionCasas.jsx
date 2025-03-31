import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CrearButton from '../components/CrearButton';
import CasaTable from '../components/CasaTable';
import CasaModal from '../components/CasaModal';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';
import VisualizarCasaModal from '../components/VisualizarCasaModal';
import axios from 'axios';

const GestionCasas = () => {
  const [casas, setCasas] = useState([]);
  const [selectedCasa, setSelectedCasa] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);

  const fetchCasas = async () => {
    try {
      const response = await axios.get("/api/houses/with-photo");
      console.log("📦 Respuesta completa:", response);
  
      if (Array.isArray(response.data)) {
        setCasas(response.data);
      } else if (Array.isArray(response.data.data)) {
        setCasas(response.data.data);
      } else {
        console.warn("⚠️ Formato inesperado:", response.data);
        setCasas([]); // evitar errores si no es un array
      }
    } catch (error) {
      console.error("❌ Error en fetchCasas:", error);
      if (error.response) {
        console.error("Respuesta del servidor:", error.response.data);
      }
      setCasas([]);
    }
  };
  
  
  

  useEffect(() => {
    fetchCasas();
  }, []);

  const handleToggleStatus = async (casa) => {
    try {
      const formData = new FormData();
      formData.append('calle', casa.calle);
      formData.append('ciudad', casa.ciudad);
      formData.append('codigoPostal', casa.codigoPostal);
      formData.append('descripcion', casa.descripcion);
      formData.append('enabled', !casa.enabled);
      if (casa.imagen) {
        formData.append('photo', casa.imagen);
      }

      await axios.put(`/api/houses/with-photo/${casa._id}`, formData);
      fetchCasas();
    } catch (error) {
      console.error('Error al cambiar estado:', error);
    }
  };

  const handleEdit = (casa) => {
    setSelectedCasa(casa);
    setModalOpen(true);
  };

  const handleView = (casa) => {
    setSelectedCasa(casa);
    setViewModalOpen(true);
  };

  const handleDeleteConfirm = (casa) => {
    setSelectedCasa(casa);
    setConfirmDeleteOpen(true);
  };

  const handleModalClose = () => {
    setSelectedCasa(null);
    setModalOpen(false);
  };

  const handleViewClose = () => {
    setSelectedCasa(null);
    setViewModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (!selectedCasa) return;
    await handleToggleStatus(selectedCasa);
    setConfirmDeleteOpen(false);
    setSelectedCasa(null);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, backgroundColor: '#D9D7CC', minHeight: '100vh', width: '100%' }}>
        <Header />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
          <h2 style={{ textAlign: 'center', color: 'black' }}>Gestión de Casas</h2>
          <div style={{
            background: '#F1F1F1',
            borderRadius: '20px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16)',
            padding: '1.5rem',
            width: '90%',
            maxWidth: '900px'
          }}>
            <CrearButton onClick={() => setModalOpen(true)} />
            <CasaTable
              casas={casas}
              onEdit={handleEdit}
              onToggle={handleDeleteConfirm}
              onView={handleView}
            />
          </div>
        </div>
      </div>
      <CasaModal open={modalOpen} onClose={handleModalClose} residence={selectedCasa} onSave={fetchCasas} />
      <VisualizarCasaModal open={viewModalOpen} onClose={handleViewClose} casa={selectedCasa} />
      <ConfirmDeleteModal
        open={confirmDeleteOpen}
        onClose={() => setConfirmDeleteOpen(false)}
        onConfirm={handleConfirmDelete}
        message={`¿Deseas deshabilitar la casa ${selectedCasa?.descripcion}?`}
      />
    </div>
  );
};

export default GestionCasas;
