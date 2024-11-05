import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import "./style.css";

const CadastroRestaurante = () => {
  const initialValues = {
    nome: '',
    cpfCnpj: '',
    telefone: '',
    cep: ''
  };

  const validationSchema = Yup.object({
    nome: Yup.string().required('Nome é obrigatório'),
    cpfCnpj: Yup.string().required('CPF/CNPJ é obrigatório'),
    telefone: Yup.string().required('Telefone é obrigatório'),
    cep: Yup.string().required('CEP é obrigatório')
  });

  const onSubmit = (values) => {
    console.log('Dados do Restaurante:', values);
  };

  return (
    <div>
      <h2>Cadastro de Restaurante</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {() => (
          <Form>
            <div>
              <label>Nome do Restaurante:</label>
              <Field type="text" name="nome" />
              <ErrorMessage name="nome" component="div" />
            </div>

            <div>
              <label>CPF/CNPJ:</label>
              <InputMask mask="000.000.000-00" name="cpfCnpj">
                {(inputProps) => <Field {...inputProps} />}
              </InputMask>
              <ErrorMessage name="cpfCnpj" component="div" />
            </div>

            <div>
              <label>Telefone:</label>
              <InputMask mask="(00) 00000-0000" name="telefone">
                {(inputProps) => <Field {...inputProps} />}
              </InputMask>
              <ErrorMessage name="telefone" component="div" />
            </div>

            <div>
              <label>CEP:</label>
              <InputMask mask="00000-000" name="cep">
                {(inputProps) => <Field {...inputProps} />}
              </InputMask>
              <ErrorMessage name="cep" component="div" />
            </div>

            <button className='button_1' type="submit">Cadastrar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CadastroRestaurante;
