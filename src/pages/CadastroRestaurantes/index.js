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
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    tipoComida: '',
    horarioFuncionamento: '',
    descricao: ''
  };

  const validationSchema = Yup.object({
    nome: Yup.string().required('Nome é obrigatório'),
    cpfCnpj: Yup.string().required('CPF/CNPJ é obrigatório'),
    telefone: Yup.string().required('Telefone é obrigatório'),
    cep: Yup.string().required('CEP é obrigatório'),
    endereco: Yup.string().required('Endereço é obrigatório'),
    numero: Yup.string().required('Número é obrigatório'),
    complemento: Yup.string(),
    bairro: Yup.string().required('Bairro é obrigatório'),
    cidade: Yup.string().required('Cidade é obrigatória'),
    estado: Yup.string().required('Estado é obrigatório'),
    tipoComida: Yup.string().required('Tipo de Comida é obrigatório'),
    horarioFuncionamento: Yup.string().required('Horário de Funcionamento é obrigatório'),
    descricao: Yup.string().required('Descrição é obrigatória')
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

            <div>
              <label>Endereço:</label>
              <Field type="text" name="endereco" />
              <ErrorMessage name="endereco" component="div" />
            </div>
            <div>
              <label>Número:</label>
              <Field type="text" name="numero" />
              <ErrorMessage name="numero" component="div" />
            </div>
            <div>
              <label>Complemento:</label>
              <Field type="text" name="complemento" />
              <ErrorMessage name="complemento" component="div" />
            </div>
            <div>
              <label>Bairro:</label>
              <Field type="text" name="bairro" />
              <ErrorMessage name="bairro" component="div" />
            </div>
            <div>
              <label>Cidade:</label>
              <Field type="text" name="cidade" />
              <ErrorMessage name="cidade" component="div" />
            </div>
            <div>
              <label>Estado:</label>
              <Field type="text" name="estado" />
              <ErrorMessage name="estado" component="div" />
            </div>
            <div>
              <label>Tipo de Comida:</label>
              <Field type="text" name="tipoComida" />
              <ErrorMessage name="tipoComida" component="div" />
            </div>
            <div>
              <label>Horário de Funcionamento:</label>
              <Field type="text" name="horarioFuncionamento" />
              <ErrorMessage name="horarioFuncionamento" component="div" />
            </div>
            <div>
              <label>Descrição:</label>
              <Field type="text" name="descricao" />
              <ErrorMessage name="descricao" component="div" />
            </div>
            <button className='button_1' type="submit">Cadastrar</button>
            <button className='button_2' type="button">Cancelar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CadastroRestaurante;
