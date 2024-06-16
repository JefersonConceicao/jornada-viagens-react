import { 
    CardDestino,
    ImageDestino,
    DestinoDescricao,
    ButtonActionDestinos
} from './style'

export function DestinoPopular({ image, descricao }){
    return (
        <CardDestino> 
            <ImageDestino src={image} alt="" />
            <h2> Tóquio </h2>
            <DestinoDescricao> 
                {descricao ?? ""}
            </DestinoDescricao>
            <ButtonActionDestinos> Saiba mais </ButtonActionDestinos>
        </CardDestino>
    )
}