import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const CasaTable = ({ casas, onEdit, onToggle, onView }) => {
  if (!Array.isArray(casas)) {
    return <p style={{ textAlign: 'center' }}>No se pudieron cargar las casas.</p>;
  }

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        <TableHead sx={{ backgroundColor: '#8B4E2F' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Dirección</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Estado</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Operaciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {casas.map((casa, index) => (
            <TableRow key={casa._id || `casa-${index}`}>
              <TableCell>
                {casa.address
                  ? `${casa.address.street}, ${casa.address.city}, ${casa.address.zip}`
                  : "Sin dirección"}
              </TableCell>
              <TableCell style={{ color: casa.enabled ? 'green' : 'red', fontWeight: 'bold' }}>
                {casa.enabled ? 'Activo' : 'Inactivo'}
              </TableCell>
              <TableCell>
                <IconButton onClick={() => onView(casa)} title="Ver detalles">
                  <VisibilityIcon />
                </IconButton>
                <IconButton onClick={() => onEdit(casa)} title="Editar">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onToggle(casa)} title="Desactivar">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CasaTable;
