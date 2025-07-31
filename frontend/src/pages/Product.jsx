// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { getProductByIDApi, addToCartApi } from '../api/api';

// const Product = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedImage, setSelectedImage] = useState('');
//   const [selectedSize, setSelectedSize] = useState('');
//   const [loading, setLoading] = useState(false);

//   const fetchProductData = async () => {
//     try {
//       const res = await getProductByIDApi(productId);
//       const fetchedProduct = res.data.product;
//       setProduct(fetchedProduct);
//       if (fetchedProduct?.image?.length > 0) {
//         setSelectedImage(fetchedProduct.image[0]);
//       }
//     } catch (error) {
//       console.error("Error fetching product:", error);
//       toast.error("Failed to load product details");
//     }
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId]);

//   const handleAddToCart = async () => {
//     if (!selectedSize) {
//       toast.warn("Please select a size before adding to cart");
//       return;
//     }

//     const userString = localStorage.getItem('user');
//     if (!userString) {
//       toast.error('Please login first!');
//       return;
//     }

//     const user = JSON.parse(userString);
//     const userId = user._id;

//     if (!userId) {
//       toast.error('User ID not found, please login again!');
//       return;
//     }

//     setLoading(true);
//     try {
//       const quantity = 1; // or let user select quantity later

//       const response = await addToCartApi({ userId, productId, quantity });

//       toast.success(response.data.message || "Added to cart!");
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Failed to add to cart.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className='pt-10 transition-opacity duration-500 ease-in border-t-2 opacity-100'>
//       {/* Product Detail */}
//       <div className='flex flex-col gap-12 sm:gap-12 sm:flex-row'>
//         {/* Images */}
//         <div className='flex flex-col-reverse flex-1 gap-3 sm:flex-row'>
//           <div className='flex justify-between overflow-x-auto sm:flex-col sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full'>
//             {product.image.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 onClick={() => setSelectedImage(img)}
//                 className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ${
//                   selectedImage === img ? 'border-2 border-gray-600 py-2 px-2' : ''
//                 }`}
//                 alt={`Thumbnail ${index}`}
//               />
//             ))}
//           </div>
//           <div className='w-full sm:w-[80%]'>
//             <img src={selectedImage} className='w-full h-auto' alt="Main Product" />
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className='flex-1'>
//           <h1 className='mt-2 text-2xl font-medium'>{product.name}</h1>

//           {/* Rating stars if you want */}

//           <p className='mt-5 text-3xl font-medium'>${product.price}</p>
//           <p className='mt-5 text-gray-500 md:w-4/5'>{product.description}</p>

//           <div className='flex flex-col gap-4 my-8'>
//             <p>Select Size</p>
//             <div className='flex gap-2'>
//               {product.sizes.map((size, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedSize(size)}
//                   className={`border py-2 px-4 bg-gray-100 rounded-md ${
//                     selectedSize === size ? 'border-orange-500' : ''
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <button
//             disabled={loading}
//             onClick={handleAddToCart}
//             className='px-8 py-3 text-sm text-white bg-black active:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'
//           >
//             {loading ? 'ADDING...' : 'ADD TO CART'}
//           </button>

//           <hr className='mt-8 sm:w-4/5' />
//           <div className='flex flex-col gap-1 mt-5 text-sm text-gray-500'>
//             <p>Guaranteed 100% Authentic – Shop with Confidence!</p>
//             <p>Enjoy Cash on Delivery – Pay at Your Doorstep!</p>
//             <p>Hassle-Free Returns & Exchanges – 10 Days, No Questions Asked!</p>
//           </div>
//         </div>
//       </div>

//       {/* Description / Reviews */}
//       <div className='mt-20'>
//         <div className='flex'>
//           <b className='px-5 py-3 text-sm border'>Description</b>
//           <p className='px-5 py-3 text-sm border'>Reviews (122)</p>
//         </div>
//         <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-500 border'>
//           <p>
//             Elevate your style with our meticulously crafted Trendify quality products.
//             Designed with a perfect balance of elegance and practicality.
//           </p>
//           <p>
//             Whether you're dressing up for a special occasion or adding a touch of
//             sophistication to your everyday look, the Trendify products offer
//             unparalleled versatility.
//           </p>
//         </div>
//       </div>

//       {/* Related Products */}
//       <RelatedProducts category={product.category} subCategory={product.subCategory} />
//     </div>
//   );
// };

// export default Product;
