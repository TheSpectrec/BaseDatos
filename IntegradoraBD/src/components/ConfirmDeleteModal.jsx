import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { motion } from "framer-motion";

function ConfirmDeleteModal({ open, onClose, onConfirm, message, isActive }) {
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleConfirm = async () => {
    if (onConfirm) {
      await onConfirm();
    }
    setNotificationOpen(true);
  };

  useEffect(() => {
    if (notificationOpen) {
      const timer = setTimeout(() => {
        setNotificationOpen(false);
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [notificationOpen, onClose]);

  const animationVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  const accion = isActive ? "deshabilitar" : "reactivar";
  const color = isActive ? "error" : "success";
  const iconColor = isActive ? "red" : "green";
  const textoBoton = isActive ? "Deshabilitar" : "Activar";
  const titulo = `¿Deseas ${accion} esta casa?`;

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogContent sx={{ textAlign: "center", padding: "20px" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={animationVariants}
          >
            <HighlightOffIcon sx={{ fontSize: 80, color: iconColor }} />
          </motion.div>
          <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
            {titulo}
          </Typography>
          <Typography variant="body2">{message}</Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Button variant="contained" color={color} onClick={handleConfirm}>
            {textoBoton}
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={notificationOpen} maxWidth="sm" fullWidth>
        <DialogContent sx={{ textAlign: "center", padding: "20px" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={animationVariants}
          >
            <CheckCircleOutlineIcon sx={{ fontSize: 80, color: "green" }} />
          </motion.div>
          <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
            Operación realizada con éxito
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ConfirmDeleteModal;
