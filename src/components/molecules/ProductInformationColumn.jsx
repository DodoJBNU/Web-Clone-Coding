import Photo from "../atoms/Photo";
import { comma } from "../../utils/convert";

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="product-information-column">
      <div className="col">
        <Photo src={image} alt={productName} />
      </div>
      <div className="col">
        <h1 className="name">{productName}</h1>
        <p className="price">{comma(price)}원</p>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
