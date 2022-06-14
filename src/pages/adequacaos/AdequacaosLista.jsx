import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdequacaoService from '../../services/academico/AdequacaoService'
import { FiEdit } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button  } from '@mui/material'

const AdequacaosLista = () => {

  const [adequacaos, setAdequacaos] = useState([]) 

  useEffect(() => {

    setAdequacaos(AdequacaoService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){ 
      AdequacaoService.delete(id)
      setAdequacaos(AdequacaoService.getAll())
    }
  }

  return (
    <div>
      <h1>Adequações prediais</h1>

      <Link style={{textDecoration: 'none'}} to={'/adequacaos/create'}><IoIosAddCircleOutline></IoIosAddCircleOutline>Incluir novo</Link>


      <Table striped bordered hover>
        <thead>
        <tr class="table-dark">
            <th>Endereço</th>
            <th>Capacidade</th>
            <th>Tipo</th>
            <th>Modificação</th>
          </tr>
        </thead>
        <tbody>
          {adequacaos.map((item, i) => (
            <tr key={i} class="table-primary">
              <td>{item.endereço}</td>
              <td>{item.capacidade}</td>
              <td>{item.tipo}</td>
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

export default AdequacaosLista