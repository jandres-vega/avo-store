import {TProduct} from "../../../database/data";
import {GetStaticProps} from "next";

export const getStaticPaths = async () => {
    const response = await fetch('http://localhost:3000/api/avo')
    const {data} = await response.json();

    const paths = data.map((avo:TProduct) => ({
        params: {
            id: avo.id
        }
    }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps:GetStaticProps = async({params}) => {
    const response = await fetch(`http://localhost:3000/api/avo/${params?.id}`)
    const data = await response.json()
    return {
        props: {
            avo: data
        }
    }
}

const ProductPage = ({avo}: {avo: TProduct}) => {

    return (
        <div className='mt-10'>
            <div className='flex justify-center items-center gap-2'>
                <div className='w-96 h-96'>
                    <img className='w-full h-full' src={avo?.image} alt="img-avo"/>
                </div>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-3xl font-black'>{avo?.name}</h2>
                    <span>{avo?.price}</span>
                    <span className='p-3 bg-gray-200'>{avo?.sku}</span>
                    <div>
                        <input className='border p-3' type="number"  defaultValue={1}/>
                        <button className='p-3 bg-green-500 rounded hover:opacity-70'>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col px-96'>
                <div className='flex flex-col gap-2 mb-6'>
                    <h3 className='text-3xl'>About this avocado</h3>
                    <p className='font-light text-lg'>{avo?.attributes.description}</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <h3 className='pl-2 font-semibold'>Atributtes</h3>
                    <div className='grid grid-cols-2 grid-rows-3 border'>
                        <span className='py-4 border pl-2'>Shape</span>
                        <span className='py-4 border pl-2'>{avo?.attributes.shape}</span>
                        <span className='py-4 border pl-2'>Hardines</span>
                        <span className='py-4 border pl-2'>{avo?.attributes.hardiness}</span>
                        <span className='py-4 border pl-2'>Taste</span>
                        <span className='py-4 border pl-2'>{avo?.attributes.taste}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
