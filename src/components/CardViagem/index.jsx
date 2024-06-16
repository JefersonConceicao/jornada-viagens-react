import { 
    Card, 
    CardHeader,
    CardBody,
    CardFooter
 } from './style'; 

 import { ButtonAction } from '../ButtonAction';

export function CardViagem({tipo, pais, valor, image, url }){
    return (
        <Card image={image}> 
            <CardHeader>
                <span> {tipo ?? ""} </span>
                <h3> {pais ?? ""} </h3> 
            </CardHeader> 
            <CardBody>
                <h1> { valor ?? ""} </h1>
            </CardBody> 
            <CardFooter>
                <ButtonAction> 
                    Ver detalhes
                </ButtonAction>
            </CardFooter>
        </Card> 
    )
}