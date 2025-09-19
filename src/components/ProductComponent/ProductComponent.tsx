import type {FC} from "react";
import type {ProductModel} from "../../models/ProductModel.ts";
import {ImageProductComponent} from "../ImageProductComponent/ImageProductComponent.tsx";
import "../ProductComponent/ProductComponent.css"


type ProductPropType = {
    product:ProductModel;
}


export const ProductComponent:FC<ProductPropType> = ({product:
    {id, title, description, category, price, discountPercentage, rating, stock, tags, brand, sku, weight, dimensions, warrantyInformation, shippingInformation, availabilityStatus, reviews, returnPolicy, minimumOrderQuantity, meta,
    images, thumbnail}}) => {
    return (
        <div className="product">
            <h2 className="product__title">{id} - {title}</h2>
            <p className="product__text">{description}</p>

            <div className="product__list-wrap">
                <ul className="product__list">
                    <li className="product__item">Category: {category}</li>
                    <li className="product__item">Price: {price}$</li>
                    <li className="product__item">Discount percentage: {discountPercentage}</li>
                    <li className="product__item">Rating: {rating}</li>
                    <li className="product__item">Stock: {stock}</li>
                    <li className="product__item">Tags: {(tags || []).join(", ")}</li>
                    <li className="product__item">Brand: {brand}</li>
                    <li className="product__item">Sku: {sku} </li>
                    <li className="product__item">Weight: {weight}</li>
                </ul>
                <ul className="product__list">
                    <li className="product__item">Dimensions width: {dimensions.width}</li>
                    <li className="product__item">Dimensions height: {dimensions.height}</li>
                    <li className="product__item">Dimensions depth: {dimensions.depth}</li>
                    <li className="product__item">Warranty Information: {warrantyInformation} </li>
                    <li className="product__item">Shipping Information: {shippingInformation}</li>
                    <li className="product__item">Availability Status: {availabilityStatus}</li>
                    <li className="product__item">Return policy: {returnPolicy}</li>
                    <li className="product__item">Minimum order quantity: {minimumOrderQuantity}</li>
                </ul>
            </div>



            <div className="product__img">
                <div className="product__image">
                    {
                        images.map(((img, i) => (
                            <ImageProductComponent key={i} src={img} alt={title + " " + i}/>
                        )))
                    }
                </div>
                <div className="product__image">
                    <ImageProductComponent src={thumbnail} alt={title}/>
                </div>
            </div>


            <div className="product__review">
                {reviews.map((review) => (
                    <ul className="product__review-item">
                        <li className="product__review-list">Rating: {review.rating}</li>
                        <li className="product__review-list">Comment: {review.comment}</li>
                        <li className="product__review-list">Date: {review.date}</li>
                        <li className="product__review-list">Reviewer name: {review.reviewerName}</li>
                        <li className="product__review-list">Reviewer email: {review.reviewerEmail}</li>
                    </ul>
                ))}
            </div>


            <div className="product__date">
                <ul className="product__date-item">
                    <li className="product__date-list">Created at: {meta.createdAt}</li>
                    <li className="product__date-list">Updated at: {meta.updatedAt}</li>
                    <li className="product__date-list">Barcode: {meta.barcode}</li>
                    <li className="product__date-list">QrCode: {meta.qrCode}</li>
                </ul>
            </div>
        </div>
    );
};