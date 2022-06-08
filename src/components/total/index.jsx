import {Container,BoxTotal,Text,Price} from './styles'

export const Total = () => {
    // let total ;
    // if(listTransactions.length === 0 ){
    //     total = 0
    // }else{
    // let arr = listTransactions.map(item=>item.type === 'Despesas' ? -(item.value) : +(item.value))
    
    // total = arr.reduce((a,b) => {return a+b} )
    // }
    return (
        <Container>
            <BoxTotal>
                <aside>
                    <p>Valor Total:</p>
                    <Text>O valor se refere ao saldo</Text>
                </aside>
                <Price>R$1500</Price>
            </BoxTotal>
        </Container>
    )
}