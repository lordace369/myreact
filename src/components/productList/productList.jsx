import './productList.scss'
import Products from '../products/products'
import { products } from '../../data'


const ProductList = () => {
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Creations</h1>
                <p className="pl-desc">
                    Some of the personal projects which are based on React and mostly Python that you can feast your eyes upon.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item)=>(
                    
                    < Products key={item.id} img={item.img} link={item.link} project={item.projectName} />

                ))}
            </div>
        </div>
    )
}
export default ProductList