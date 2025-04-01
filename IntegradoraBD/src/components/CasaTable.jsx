import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Pagination,
  Box
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const CasaTable = ({ casas, onEdit, onToggle, onView, paginaActual, totalPaginas, onPaginaChange }) => {
  if (!Array.isArray(casas)) {
    return <p style={{ textAlign: 'center' }}>No se pudieron cargar las casas.</p>;
  }

  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          borderRadius: '10px',
          overflow: 'hidden',
          border: '1px solid #ddd'
        }}
      >
        <TableContainer sx={{ maxHeight: 300 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#8B4E2F', color: 'white', fontWeight: 'bold' }}>Dirección</TableCell>
                <TableCell sx={{ backgroundColor: '#8B4E2F', color: 'white', fontWeight: 'bold' }}>Estado</TableCell>
                <TableCell sx={{ backgroundColor: '#8B4E2F', color: 'white', fontWeight: 'bold' }}>Operaciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {casas.map((casa, index) => (
                <TableRow key={casa._id || `casa-${index}`} hover>
                  <TableCell>
                    {casa.address
                      ? `${casa.address.street}, ${casa.address.city}, ${casa.address.zip}`
                      : "Sin dirección"}
                  </TableCell>
                  <TableCell sx={{ color: casa.status === "activo" ? "green" : "red", fontWeight: 'bold' }}>
                    {casa.status === "activo" ? "Activo" : "Inactivo"}
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => onView(casa)} title="Ver detalles"><VisibilityIcon /></IconButton>
                    <IconButton onClick={() => onEdit(casa)} title="Editar"><EditIcon /></IconButton>
                    <IconButton onClick={() => onToggle(casa)} title="Desactivar"><DeleteIcon /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Pagination
        count={totalPaginas}
        page={paginaActual}
        onChange={(_, page) => onPaginaChange(page)}
        sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
        color="primary"
      />
    </Box>
  );
};

export default CasaTable;
