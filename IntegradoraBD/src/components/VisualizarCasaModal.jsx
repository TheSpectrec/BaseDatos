import {
  Dialog, DialogTitle, DialogContent, Typography, Grid, Divider, Box, Button
} from "@mui/material";

const VisualizarCasaModal = ({ open, onClose, casa }) => {
  if (!casa) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Detalles de la Casa</DialogTitle>
      <Divider />
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <Typography><b>Dirección:</b> {`${casa.address?.street}, ${casa.address?.city}, ${casa.address?.zip}`}</Typography>
          <Typography><b>Descripción:</b> {casa.description || "Sin descripción"}</Typography>          
          <Typography color={casa.status === "activo" ? "green" : "red"}>
  <b>Estado:</b> {casa.status === "activo" ? "Activo" : "Inactivo"}
</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          {casa.photo && (
  <Box sx={{ border: "1px solid #ccc", borderRadius: "10px", overflow: "hidden" }}>
    <img
      src={`/uploads/${casa.photo}`}
      alt="Casa"
      style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
    />
  </Box>
)}
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          <Button variant="contained" onClick={onClose}>Cerrar</Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default VisualizarCasaModal;
