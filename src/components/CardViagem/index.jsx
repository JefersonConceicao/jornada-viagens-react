import { 
    Card, 
    CardHeader,
    CardBody,
    CardFooter
 } from './style'; 

export function CardViagem(){
    return (
        <Card> 
            <CardHeader>
                <span> Hotel + Aéreo </span>
                <h4> Japão </h4> 
            </CardHeader> 
            <CardBody>
                R$ 4.0000
            </CardBody> 
            <CardFooter>
                <button> 
                    Ver detalhes 
                </button>
            </CardFooter>
        </Card> 
    )
}