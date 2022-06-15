import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck, FaArrowLeft } from 'react-icons/fa'
import InstalacaoService from '../../services/academico/InstalacaoService';
import instalacaoValidator from '../../validators/instalacaoValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';

const instalacaos = InstalacaoService.getAll() 

const Instalacaos = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm(); 

  useEffect(() => {
    if (params.id) {
      const instalacao = InstalacaoService.get(params.id)

      for (let campo in instalacao) {
        setValue(campo, instalacao[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      InstalacaoService.update(params.id, dados)
    } else {
      InstalacaoService.create(dados)
    }

    navigate('/instalacaos')
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1>Instalação</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text"
          {...register("nome", instalacaoValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="periodo">
          <Form.Label>Data e horário: </Form.Label>
          <Form.Control isInvalid={errors.periodo} type="datetime-local" {...register("periodo", instalacaoValidator.periodo)} />
          {errors.periodo && <span>{errors.periodo.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="periodo">
          <Form.Label>CEP: </Form.Label>
          <Form.Control isInvalid={errors.cep} type="text" 
          {...register("cep", instalacaoValidator.cep)} 
          mask="99999-999" onChange={handleChange} />
          {errors.cep && <span>{errors.cep.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="protocolo">
          <Form.Label>Número protocolo: </Form.Label>
          <Form.Control isInvalid={errors.protocolo} type="text"
          {...register("protocolo", instalacaoValidator.protocolo)}
          mask="999999" onChange={handleChange} />
          {errors.protocolo && <span>{errors.protocolo.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control isInvalid={errors.telefone} type="text" 
          {...register("telefone", instalacaoValidator.telefone)} 
          mask="(99) 99999-9999" onChange={handleChange}/>
          {errors.telefone && <span>{errors.telefone.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="endereço">
          <Form.Label>Endereço: </Form.Label>
          <Form.Control isInvalid={errors.endereço} type="text" {...register("endereço", instalacaoValidator.endereço)} />
          {errors.endereço && <span>{errors.endereço.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="observacoes">
          <Form.Label>Observações: </Form.Label>
          <Form.Control isInvalid={errors.observacoes} type="text" {...register("observacoes", instalacaoValidator.observacoes)} />
          {errors.observacoes && <span>{errors.observacoes.message}</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} ><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-primary' to={-1}><FaArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Instalacaos