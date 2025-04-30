import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const FeaturedProducts = ({ featuredProducts = [] }) => {
	const { addToCart } = useCartStore();

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className='py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-center text-5xl sm:text-6xl font-bold text-sky-400 mb-10 font-poppins shadow-md'>
					Featured Products
				</h2>
				<Slider {...settings}>
					{featuredProducts.map((product) => (
						<div key={product._id} className='px-2'>
							<div className='bg-gradient-to-br from-sky-800/30 to-sky-900/20 backdrop-blur-md rounded-2xl border border-sky-500/40 shadow-lg overflow-hidden h-full hover:shadow-2xl transition-all duration-300'>
								<div className='overflow-hidden'>
									<img
										src={product.image}
										alt={product.name}
										className='w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-110 hover:brightness-110'
									/>
								</div>
								<div className='p-4'>
									<h3 className='text-2xl font-semibold mb-2 text-white drop-shadow-md'>{product.name}</h3>
									<p className='text-white font-medium mb-4'>${product.price.toFixed(2)}</p>
									<button
										onClick={() => addToCart(product)}
										className='w-full bg-sky-700 hover:bg-sky-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center'
									>
										<ShoppingCart className='w-8 mr-2' />
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default FeaturedProducts;
