import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck, FaArrowLeft } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import AdequacaoService from '../../services/academico/AdequacaoService';
import InstalacaoService from '../../services/academico/InstalacaoService';
import adequacaoValidator from '../../validators/adequacaoValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';
 
const Adequacaos = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm(); 

  const instalacaos = InstalacaoService.getAll()
  
  useEffect(() => {
    
    if (params.id) {
      const adequacao = AdequacaoService.get(params.id)

      for (let campo in adequacao) {
        setValue(campo, adequacao[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      AdequacaoService.update(params.id, dados)
    } else {
      AdequacaoService.create(dados)
    }

    navigate('/adequacaos')
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1>Adequação</h1>

      <Form >
        <Form.Group className="mb-3" controlId="endereço">
          <Form.Label>Endereço: </Form.Label>
          <Form.Control isInvalid={errors.endereço} type="text" {...register("endereço", adequacaoValidator.endereço)} />
          {errors.endereço && <span>{errors.endereço.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label>Capacidade: </Form.Label>
          <Form.Control isInvalid={errors.capacidade} type="number" {...register("capacidade", adequacaoValidator.capacidade)} />
          {errors.capacidade && <span>{errors.capacidade.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Tipo: </Form.Label>
          <Form.Control isInvalid={errors.tipo} type="text" {...register("tipo", adequacaoValidator.tipo)} />
          {errors.tipo && <span>{errors.tipo.message}</span>}
        </Form.Group>
        <div className="text-center">
        <Button onClick={handleSubmit(salvar)} ><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-primary' to={-1}><FaArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Adequacaos