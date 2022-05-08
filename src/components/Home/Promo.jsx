import { Link } from "react-router-dom";

const Promo = () => {
    return (
        <div className="relative bg-gray800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="https://media.vogue.es/photos/5cc71703fdc8224b601f7518/master/w_1200,h_800,c_limit/lauren_bacall_una_leyenda_en_el_firmamento_de_las_estrellas_496833667.jpg"
                    alt="Humphrey Bogart and Lauren Bacall"
                    className="w-full h-full object-center object-cover grayscale-0"
                />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray800 bg-opacity-50" />
            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-3xl font-extrabold font-lora tracking-tight text-gold brightness-125 sm:text-4xl">Free shipping on orders over $150</h2>
                <p className="mt-3 text-md md:text-xl text-white">
                    We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to
                    focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of the
                    universe.
                </p>
                <Link
                    to="/categories"
                    className="mt-8 w-full block bg-white rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                    Go shopping
                </Link>
            </div>
        </div>
    )
}

export default Promo