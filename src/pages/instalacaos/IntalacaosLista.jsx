import React, { useEffect, useState } from 'react'
import { CloseButton, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InstalacaoService from '../../services/academico/InstalacaoService'
import { IoIosAddCircleOutline } from "react-icons/io";
import { Button  } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { FiEdit } from "react-icons/fi";


const InstalacaosLista = () => {

  const [instalacaos, setInstalacaos] = useState([]) 

  useEffect(() => {

    setInstalacaos(InstalacaoService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      InstalacaoService.delete(id)
      setInstalacaos(InstalacaoService.getAll())
    }
  }

  return (
    <div>
      <h1>Instalações</h1>

      <Link style={{textDecoration: 'none'}} to={'/instalacaos/create'}><IoIosAddCircleOutline></IoIosAddCircleOutline>Incluir novo</Link>
      <Table striped bordered hover >
        <thead>
          <tr class="table-dark">
            
            <th>Nome</th>
            <th>Data e Horário</th>
            <th>Região</th>
            <th>N° Protocolo</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Observações</th>
            <th>Modificação</th>
          </tr>
        </thead>
        <tbody>
          {instalacaos.map((item, i) => (
            <tr key={i} class="table-primary">
              
              <td class="text-primary">{item.nome}</td>
              <td>{item.periodo}</td>
              <td>{item.regiao}</td>
              <td>{item.protocolo}</td>
              <td>{item.telefone}</td>
              <td>{item.endereço}</td>
              <td>{item.observacoes}</td>
              <td>
                <Link style={{textDecoration: 'none'}} to={'/instalacaos/' + i}><FiEdit></FiEdit>Edit </Link>{'    '}
                <Button onClick={() => apagar(i)} startIcon={<DeleteIcon /> }>Delete </Button>

              </td>
            </tr>
            
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default InstalacaosLista