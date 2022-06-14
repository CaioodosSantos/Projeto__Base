import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import MudancaService from '../../services/academico/MudancaService';
import InstalacaoService from '../../services/academico/InstalacaoService';
import mudancaValidator from '../../validators/mudancaValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
 
const Mudancas = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm(); 

  const instalacaos = InstalacaoService.getAll()
  
  useEffect(() => {
    
    if (params.id) {
      const mudanca = MudancaService.get(params.id)

      for (let campo in mudanca) {
        setValue(campo, mudanca[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      MudancaService.update(params.id, dados)
    } else {
      MudancaService.create(dados)
    }

    navigate('/mudancas')
  }

  return (
    <div>
      <h1>Mudanca</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", mudancaValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="datainicio">
          <Form.Label>Data inicio: </Form.Label>
          <Form.Control isInvalid={errors.datainicio} type="date" {...register("datainicio", mudancaValidator.datainicio)} />
          {errors.datainicio && <span>{errors.datainicio.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Data fim: </Form.Label>
          <Form.Control isInvalid={errors.datafim} type="date" {...register("datafim", mudancaValidator.datafim)} />
          {errors.datafim && <span>{errors.datafim.message}</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Mudancas