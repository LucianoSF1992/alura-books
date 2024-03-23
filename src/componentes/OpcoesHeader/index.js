import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Opcao = styled.li`
    display: flex;
    font-size: 16px;
    min-width: 120px;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    align-items: center;
`


const Opcoes = styled.ul`
    display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

function OpcoesHeader() {
  return(
      <Opcoes>
          { textoOpcoes.map( (texto) => (
              <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
          ) ) }
      </Opcoes>
  )
}

export default OpcoesHeader