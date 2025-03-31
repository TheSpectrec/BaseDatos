import React, { useState, useEffect } from "react";
import {
  Dialog, DialogTitle, DialogContent, TextField, Button,
  Grid, Snackbar, Alert, Box, Divider, FormControlLabel, Checkbox
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  calle: Yup.string().required("La dirección es obligatoria"),
  descripcion: Yup.string().required("La descripción es obligatoria")
});

const CasaModal = ({ open, onClose, residence, onSave }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const isEditMode = Boolean(residence);

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
formData.append("street", values.calle);           // antes: "calle"
formData.append("city", values.ciudad);            // antes: "ciudad"
formData.append("zip", values.codigoPostal);       // antes: "codigoPostal"
formData.append("description", values.descripcion);
if (values.file) {
  formData.append("photo", values.file);           // se mantiene igual
}

      formData.append("enabled", values.enabled);      

      if (residence && residence.id) {
        await axios.put(`http://localhost:4000/api/houses/update/${residence.id}`, formData);
      } else {
        await axios.post("http://localhost:4000/api/houses/with-photo", formData);
      }

      setSuccessMessage("Casa guardada correctamente");
      onSave();
      onClose();
    } catch (error) {
      setErrorMessage("Error al guardar la casa");
      console.error("Error al guardar la casa:", error);
    }
  };
  const initialValues = {
    calle: residence?.calle || "",
    ciudad: residence?.ciudad || "",
    codigoPostal: residence?.codigoPostal || "",
    descripcion: residence?.descripcion || "",
    file: null,
    enabled: residence?.enabled ?? true,
  };

  useEffect(() => {
    if (residence?.photo) {
      setPreviewImage(`http://localhost:4000/uploads/${residence.photo}`);
    } else {
      setPreviewImage(null);
    }
  }, [residence]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        {isEditMode ? "Editar Casa" : "Registrar Nueva Casa"}
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ padding: "40px" }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ errors, touched, setFieldValue, values }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="calle"
                    label="Calle *"
                    error={touched.calle && Boolean(errors.calle)}
                    helperText={touched.calle && errors.calle}
                  />
                  <Field
                    as={TextField}
                    fullWidth
                    name="ciudad"
                    label="Ciudad *"
                    error={touched.calle && Boolean(errors.calle)}
                    helperText={touched.calle && errors.calle}
                    sx={{ mt: 2 }}
                  />
                  <Field
                    as={TextField}
                    fullWidth
                    name="codigoPostal"
                    label="Código Postal *"
                    error={touched.calle && Boolean(errors.calle)}
                    helperText={touched.calle && errors.calle}
                    sx={{ mt: 2 }}
                  />
                  <Field
                    as={TextField}
                    fullWidth
                    name="descripcion"
                    label="Descripción *"
                    error={touched.descripcion && Boolean(errors.descripcion)}
                    helperText={touched.descripcion && errors.descripcion}
                    sx={{ mt: 2 }}
                  />
                  {isEditMode && (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.enabled}
                          onChange={(e) => setFieldValue("enabled", e.target.checked)}
                        />
                      }
                      label="Activo"
                      sx={{ mt: 2 }}
                    />
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="outlined" component="label" sx={{ mb: 2 }}>
                    {isEditMode ? "Cambiar imagen" : "Subir imagen"}
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={(e) => {
                        const file = e.currentTarget.files[0];
                        setFieldValue("file", file);
                        setPreviewImage(URL.createObjectURL(file));
                      }}
                    />
                  </Button>

                  {previewImage && (
                    <Box
                      sx={{
                        mt: 2,
                        width: "100%",
                        height: "220px",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={previewImage}
                        alt="Previsualización"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </Box>
                  )}
                </Grid>
              </Grid>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                <Button onClick={onClose} variant="contained" sx={{ backgroundColor: "#d9534f", color: "white", mr: 3 }}>
                  Cancelar
                </Button>
                <Button type="submit" variant="contained" sx={{ backgroundColor: "#5cb85c", color: "white" }}>
                  {isEditMode ? "Guardar Cambios" : "Registrar"}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </DialogContent>

      <Snackbar open={Boolean(successMessage)} autoHideDuration={3000} onClose={() => setSuccessMessage(null)}>
        <Alert severity="success">{successMessage}</Alert>
      </Snackbar>
      <Snackbar open={Boolean(errorMessage)} autoHideDuration={3000} onClose={() => setErrorMessage(null)}>
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
    </Dialog>
  );
};

export default CasaModal;
