import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import VistoriaService from '../../services/academico/VistoriaService'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button  } from '@mui/material'

const VistoriasLista = () => {

  const [vistorias, setVistorias] = useState([])

  useEffect(() => {

    setVistorias(VistoriaService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){ 
      VistoriaService.delete(id)
      setVistorias(VistoriaService.getAll())
    }
  }

  return (
    <div>
      <h1>Vistorias</h1>

      <Link style={{textDecoration: 'none'}} to={'/vistorias/create'}><IoIosAddCircleOutline></IoIosAddCircleOutline>Incluir novo</Link>

      <Table striped bordered hover>
        <thead>
        <tr class="table-dark">
        <th>Nome</th>
            <th>Data</th>
            <th>Telefone</th>
            <th>Motivo</th>
            <th>Modificações</th>
          </tr>
        </thead>
        <tbody>
          {vistorias.map((item, i) => (
            <tr key={i} class="table-primary">
              <td>{item.nome}</td>
              <td>{item.data}</td>
              <td>{item.telefone}</td>
              <td>{item.motivo}</td>
              <td>
              <Link style={{textDecoration: 'none'}} to={'/vistorias/' + i}><FiEdit></FiEdit>Edit </Link>{'    '}
              <Button onClick={() => apagar(i)} startIcon={<DeleteIcon /> }>Delete </Button> 
              </td>       
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default VistoriasLista