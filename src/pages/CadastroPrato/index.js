import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./style.css"; 

const CadastroPrato = () => {
  const initialValues = {
    nomePrato: '',
    descricao: '',
    preco: ''
  };

  const validationSchema = Yup.object({
    nomePrato: Yup.string().required('Nome do Prato é obrigatório'),
    descricao: Yup.string().required('Descrição é obrigatória'),
    preco: Yup.number().required('Preço é obrigatório').positive('Preço deve ser positivo')
  });

  const onSubmit = (values) => {
    console.log('Dados do Prato:', values);
  };

  return (
    <div className="cadastro-prato-container">
      <h2>Cadastro de Prato</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {() => (
          <Form className='formulario'>
            <div className='campo'>
              <label>Nome do Prato:</label>
              <Field type="text" name="nomePrato" />
              <ErrorMessage name="nomePrato" component="div" className="error-message" />
            </div>

            <div className='campo'>
              <label>Descrição:</label>
              <Field type="text" name="descricao" />
              <ErrorMessage name="descricao" component="div" className="error-message" />
            </div>

            <div className='campo'>
              <label>Preço:</label>
              <Field type="number" name="preco" />
              <ErrorMessage name="preco" component="div" className="error-message" />
            </div>

            <button className='button_1' type="submit">Cadastrar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CadastroPrato;