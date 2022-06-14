import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck, FaArrowLeft } from 'react-icons/fa'
import RetiradaService from '../../services/academico/RetiradaService';
import InstalacaoService from '../../services/academico/InstalacaoService';
import retiradaValidator from '../../validators/retiradaValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';

const Retiradas = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm(); 

  const instalacaos = InstalacaoService.getAll()
  
  useEffect(() => {
    
    if (params.id) {
      const retiradas = RetiradaService.get(params.id)

      for (let campo in retiradas) {
        setValue(campo, retiradas[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      RetiradaService.update(params.id, dados)
    } else {
      RetiradaService.create(dados)
    }

    navigate('/retiradas')
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1>Retiradas</h1>

      <Form >
      <Form.Group className="mb-3" controlId="instalacao">
          <Form.Label>Instalação: </Form.Label>
          <Form.Select {...register("nome", retiradaValidator.instalacao)}>
            <option>Selecione</option>
            {instalacaos.map((item, i) => (
              <option key={i} value={item.nome}>{item.nome}</option>
            ))}
          </Form.Select>
          {errors.instalacao && <span>Campo Obrigatório</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="data">
          <Form.Label>Data: </Form.Label>
          <Form.Control isInvalid={errors.data} type="date" {...register("data", retiradaValidator.data)} />
          {errors.data && <span>{errors.data.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="data">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control isInvalid={errors.telefone} type="text"
          {...register("telefone", retiradaValidator.telefone)} 
          mask="(99) 99999-9999" onChange={handleChange}/>
          {errors.telefone && <span>{errors.telefone.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control isInvalid={errors.email} type="email" {...register("email", retiradaValidator.email)} />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>
        
        <div className="text-center">
        <Button onClick={handleSubmit(salvar)} ><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-primary' to={-1}><FaArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Retiradas