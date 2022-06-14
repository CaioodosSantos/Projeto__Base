import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import VisitaService from '../../services/academico/VisitaService'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button  } from '@mui/material'

const VisitasLista = () => {

  const [visitas, setVisitas] = useState([])

  useEffect(() => {

    setVisitas(VisitaService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      VisitaService.delete(id)
      setVisitas(VisitaService.getAll())
    }
  }

  return (
    <div>
      <h1>Visitas técnicas</h1>

      <Link style={{textDecoration: 'none'}} to={'/visitas/create'}><IoIosAddCircleOutline></IoIosAddCircleOutline>Incluir novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
          {visitas.map((item, i) => (
            <tr key={i}>
              <td>
              <Link style={{textDecoration: 'none'}} to={'/visitas/' + i}><FiEdit></FiEdit>Edit </Link>{'    '}
              <Button onClick={() => apagar(i)} startIcon={<DeleteIcon /> }>Delete </Button> 
              </td>
              <td>{item.nome}</td>
              <td>{item.curso}</td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default VisitasLista