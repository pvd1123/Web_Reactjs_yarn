import React from "react";
import collectionItems from "../data/item.json"
import {Row, Col} from "react-bootstrap"
import CollectionItem from "../components/CollectionItem";


function Colletion(){
    return (
    <>
        <h1>Collection</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {collectionItems.map(item =>(
                <Col key={item.id}>
                    <CollectionItem {...item} />
                </Col>
            ))}
            
        </Row>
    </>
    )
}

export default Colletion