
import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './PrizeDetails.css';

const PrizeDetailsForm = () => {
  const initialValues = {
    name: '',
    type: '',
    value: '',
    country: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    type: Yup.string().required('Required'),
    value: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    
    console.log('Form submitted:', values);

    resetForm();
  };

  return (
    <div className="formContainer">
      <h2>Olympic Prize Details Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} className="fieldContainer">
                <Field
                  as={TextField}
                  fullWidth
                  name="name"
                  label="Prize Name"
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="type"
                  label="Type (Gold/Silver/Bronze)"
                  error={touched.type && !!errors.type}
                  helperText={touched.type && errors.type}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="Category"
                  label="Category"
                  error={touched.value && !!errors.value}
                  helperText={touched.value && errors.value}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="country"
                  label="Country"
                  error={touched.country && !!errors.country}
                  helperText={touched.country && errors.country}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PrizeDetailsForm;
