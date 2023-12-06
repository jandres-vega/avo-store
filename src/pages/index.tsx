import {useEffect, useState} from "react";
import {TProduct} from "../../database/data";
import Header from "@/components/Header/Header";
import Card from "@/components/CardAvo/Card";
import Link from "next/link";
// export const getServerSideProps = async() => {
//     const response = await fetch('http://localhost:3000/api/avo')
//     const {data} = await response.json()
//     return {
//         props: {
//             productList: data
//         }
//     }
// }
export const getStaticProps = async() => {
    const response = await fetch('http://localhost:3000/api/avo')
    const {data} = await response.json()
    return {
        props: {
            productList: data
        }
    }
}

const HomePage = ({productList}: {productList: TProduct[]}) => {
    return (
        <div>
            <Header />
            <div className='grid lg:grid-cols-4 px-6 gap-5 mt-4 sm:grid-cols-2'>
                {
                    productList.map(product => (
                        <Link key={product.id} href='/product/[id]' as={`/product/${product.id}`}>
                            <Card
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                shape={product.attributes.shape}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage
