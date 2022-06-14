import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RetiradaService from '../../services/academico/RetiradaService'
import { FiEdit } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button  } from '@mui/material'

const RetiradasLista = () => {

  const [retiradas, setRetiradas] = useState([])

  useEffect(() => {

    setRetiradas(RetiradaService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){ 
      RetiradaService.delete(id)
      setRetiradas(RetiradaService.getAll())
    }
  }

  return (
    <div>
      <h1>Retiradas</h1>

      <Link style={{textDecoration: 'none'}} to={'/retiradas/create'}><IoIosAddCircleOutline></IoIosAddCircleOutline>Incluir novo</Link>

      <Table striped bordered hover>
        <thead>
        <tr class="table-dark">
            <th>Nome</th>
            <th>Data</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Modificação</th>
          </tr>
        </thead>
        <tbody>
          {retiradas.map((item, i) => (
            <tr key={i} class="table-primary">
              <td class="text-primary">{item.nome}</td>
              <td>{item.data}</td>
              <td>{item.telefone}</td>
              <td>{item.email}</td>
              <td>
              <Link style={{textDecoration: 'none'}} to={'/retiradas/' + i}><FiEdit></FiEdit>Edit </Link>{'    '}
              <Button onClick={() => apagar(i)} startIcon={<DeleteIcon /> }>Delete </Button> 
              </td>         
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default RetiradasLista