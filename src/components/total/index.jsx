import { useRelease } from '../../provider'
import {Container,BoxTotal,Text,Price} from './styles'

export const Total = () => {
    const {total} = useRelease()
    
    return (
        <Container>
            <BoxTotal>
                <aside>
                    <p>Valor Total:</p>
                    <Text>O valor se refere ao saldo</Text>
                </aside>
                <Price>R${total}</Price>
            </BoxTotal>
        </Container>
    )
}