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
          <Typography><b>Descripción:</b> {casa.descripcion}</Typography>
            <Typography color={casa.enabled ? "green" : "red"}>
              <b>Estado:</b> {casa.enabled ? "Activo" : "Inactivo"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            {casa.imagen && (
              <Box sx={{ border: "1px solid #ccc", borderRadius: "10px", overflow: "hidden" }}>
                <img src={`/uploads/${casa.imagen}`} alt="Casa" style={{ width: "100%" }} />
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
