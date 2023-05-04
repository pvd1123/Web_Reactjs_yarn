import React from "react";
import { Button, Card } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency"
import useShoppingCart from "../context/ShoppingCartContext";


type CollectionItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}


function CollectionItem({id, name, price,imgUrl}:CollectionItemProps){
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)


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
                    <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
                        Thêm Vào Giỏ Hàng
                    </Button>
                ) : <div className="d-flex align-items-center flex-column"
                         style={{gap: ".5rem"}}>
                        <div className="d-flex align-items-center justify-contenr-center"
                            style={{gap: ".5rem"}}>
                            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            <div>
                                <span className="fs-3">{quantity}</span>
                            </div>
                            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                        </div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
                            Remove
                        </Button>
                    </div>
                }
            </div>
            </Card.Body>
        </Card>
    )
}

export default CollectionItem