import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import VisitaService from '../../services/academico/VisitaService';
import InstalacaoService from '../../services/academico/InstalacaoService';
import visitaValidator from '../../validators/visitaValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Visitas = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const instalacaos = InstalacaoService.getAll()
  
  useEffect(() => {
    
    if (params.id) {
      const visita = VisitaService.get(params.id)

      for (let campo in visita) {
        setValue(campo, visita[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      VisitaService.update(params.id, dados)
    } else {
      VisitaService.create(dados)
    }

    navigate('/visitas')
  }

  return (
    <div>
      <h1>Visita</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", visitaValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="instalacao">
          <Form.Label>Instalação: </Form.Label>
          <Form.Select {...register("instalacao", visitaValidator.instalacao)}>
            <option>Selecione</option>
            {instalacaos.map((item, i) => (
              <option key={i} value={item.nome}>{item.nome}</option>
            ))}
          </Form.Select>
          {errors.instalacao && <span>Campo Obrigatório</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Visitas