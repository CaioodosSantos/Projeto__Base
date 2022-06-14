import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck, FaArrowLeft } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import VistoriaService from '../../services/academico/VistoriaService';
import InstalacaoService from '../../services/academico/InstalacaoService';
import vistoriaValidator from '../../validators/vistoriaValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';

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
  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1>Vistorias</h1>

      <Form >
      <Form.Group className="mb-3" controlId="instalacao">
          <Form.Label>Instalação: </Form.Label>
          <Form.Select {...register("nome", vistoriaValidator.instalacao)}>
            <option>Selecione</option>
            {instalacaos.map((item, i) => (
              <option key={i} value={item.nome}>{item.nome}</option>
            ))}
          </Form.Select>
          {errors.instalacao && <span>Campo Obrigatório</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="data">
          <Form.Label>Data: </Form.Label>
          <Form.Control isInvalid={errors.cpf} type="date" {...register("data", vistoriaValidator.data)} />
          {errors.data && <span>{errors.data.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="data">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control isInvalid={errors.telefone} type="text"
          {...register("telefone", vistoriaValidator.telefone)} 
          mask="(99) 99999-9999" onChange={handleChange}/>
          {errors.telefone && <span>{errors.telefone.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="data">
          <Form.Label>Motivo: </Form.Label>
          <Form.Control isInvalid={errors.motivo} type="text"
          {...register("motivo", vistoriaValidator.motivo)} />
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

export default Vistorias