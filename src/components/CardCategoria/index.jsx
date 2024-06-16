import { 
    Card,
    CardIcon,
    CardTitle
} from './style';

export function CardCategoria({ image, title }){
    return (
        <Card> 
            <CardIcon src={image} alt=""/>
            <CardTitle> {title} </CardTitle>
        </Card>
    )
}