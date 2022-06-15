import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck, FaArrowLeft } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import MudancaService from '../../services/academico/MudancaService';
import InstalacaoService from '../../services/academico/InstalacaoService';
import mudancaValidator from '../../validators/mudancaValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';
 
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
  
  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1>Mudança de endereço e ponto</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Tipo: </Form.Label>
          <Form.Control isInvalid={errors.tipo} type="text" {...register("tipo", mudancaValidator.tipo)} />
          {errors.tipo && <span>{errors.tipo.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="instalacao">
          <Form.Label>Instalação: </Form.Label>
          <Form.Select {...register("nome", mudancaValidator.instalacao)}>
            <option>Selecione</option>
            {instalacaos.map((item, i) => (
              <option key={i} value={item.nome}>{item.nome}</option>
            ))}
          </Form.Select>
          {errors.instalacao && <span>Campo Obrigatório</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Data: </Form.Label>
          <Form.Control isInvalid={errors.data} type="date" {...register("data", mudancaValidator.data)} />
          {errors.data && <span>{errors.data.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="endereço">
          <Form.Label>Novo Endereço:(opcional) </Form.Label>
          <Form.Control isInvalid={errors.endereço} type="text" {...register("endereço", mudancaValidator.endereço)} />
          {errors.endereço && <span>{errors.endereço.message}</span>}
        </Form.Group>
        <div className="text-center">
        <Button onClick={handleSubmit(salvar)} ><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-primary' to={-1}><FaArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Mudancas