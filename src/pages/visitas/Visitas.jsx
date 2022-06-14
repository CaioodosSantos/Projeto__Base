import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck, FaArrowLeft } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import VisitaService from '../../services/academico/VisitaService';
import InstalacaoService from '../../services/academico/InstalacaoService';
import visitaValidator from '../../validators/visitaValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';

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

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1>Visita técnica</h1>

      <Form >
        <Form.Group className="mb-3" controlId="instalacao">
          <Form.Label>Instalação: </Form.Label>
          <Form.Select {...register("nome", visitaValidator.instalacao)}>
            <option>Selecione</option>
            {instalacaos.map((item, i) => (
              <option key={i} value={item.nome}>{item.nome}</option>
            ))}
          </Form.Select>
          {errors.instalacao && <span>Campo Obrigatório</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="data">
          <Form.Label>Data: </Form.Label>
          <Form.Control isInvalid={errors.data} type="date" {...register("data", visitaValidator.data)} />
          {errors.data && <span>{errors.data.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="data">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control isInvalid={errors.telefone} type="text"
          {...register("telefone", visitaValidator.telefone)} 
          mask="(99) 99999-9999" onChange={handleChange}/>
          {errors.telefone && <span>{errors.telefone.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="data">
          <Form.Label>Motivo: </Form.Label>
          <Form.Control isInvalid={errors.motivo} type="text"
          {...register("motivo", visitaValidator.motivo)} />
          {errors.motivo && <span>{errors.motivo.message}</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} ><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-primary' to={-1}><FaArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Visitas