

const ItemList = () => {
    const {categoryid} = useParams()

    

    return(
        
        < ItemListContainer categoryid = {categoryid} />
    )
}

export default ItemList;