import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import VistoriaService from '../../services/academico/VistoriaService';
import InstalacaoService from '../../services/academico/InstalacaoService';
import vistoriaValidator from '../../validators/vistoriaValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Vistorias = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm(); 

  const instalacaos = InstalacaoService.getAll()
  
  useEffect(() => {
    
    if (params.id) {
      const vistorias = VistoriaService.get(params.id)

      for (let campo in vistorias) {
        setValue(campo, vistorias[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      VistoriaService.update(params.id, dados)
    } else {
      VistoriaService.create(dados)
    }

    navigate('/vistorias')
  }

  return (
    <div>
      <h1>Vistorias</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", vistoriaValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF: </Form.Label>
          <Form.Control isInvalid={errors.cpf} type="text" {...register("cpf", vistoriaValidator.cpf)} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matricula: </Form.Label>
          <Form.Control isInvalid={errors.matricula} type="text" {...register("matricula", vistoriaValidator.matricula)} />
          {errors.matricula && <span>{errors.matricula.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="salario">
          <Form.Label>Salario: </Form.Label>
          <Form.Control isInvalid={errors.salario} type="text" {...register("salario", vistoriaValidator.salario)} />
          {errors.salario && <span>{errors.salario.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control isInvalid={errors.email} type="email" {...register("email", vistoriaValidator.email)} />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control isInvalid={errors.telefone} type="text" {...register("telefone", vistoriaValidator.telefone)} />
          {errors.telefone && <span>{errors.telefone.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>Cep: </Form.Label>
          <Form.Control isInvalid={errors.cep} type="text" {...register("cep", vistoriaValidator.cep)} />
          {errors.cep && <span>{errors.cep.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro: </Form.Label>
          <Form.Control isInvalid={errors.logradouro} type="text" {...register("logradouro", vistoriaValidator.logradouro)} />
          {errors.logradouro && <span>{errors.logradouro.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento: </Form.Label>
          <Form.Control isInvalid={errors.complemento} type="text" {...register("complemento", vistoriaValidator.complemento)} />
          {errors.complemento && <span>{errors.complemento.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero: </Form.Label>
          <Form.Control isInvalid={errors.numero} type="text" {...register("numero", vistoriaValidator.numero)} />
          {errors.numero && <span>{errors.numero.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro: </Form.Label>
          <Form.Control isInvalid={errors.bairro} type="text" {...register("bairro", vistoriaValidator.bairro)} />
          {errors.bairro && <span>{errors.bairro.message}</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Vistorias