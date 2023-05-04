import React from "react";
import { Button, Card } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency"


type CollectionItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}


function CollectionItem({id, name, price,imgUrl}:CollectionItemProps){
    const quantity = 0
    return(
        <Card className="h-100">
            <Card.Img variant="top" src={imgUrl} height="380px"
                      style={{objectFit:"cover"}}  />
            <Card.Body className ="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline
                                        mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ?(
                    <Button>
                        Thêm Vào Giỏ Hàng
                    </Button>
                ):null}
            </div>
            </Card.Body>
        </Card>
    )
}

export default CollectionItem