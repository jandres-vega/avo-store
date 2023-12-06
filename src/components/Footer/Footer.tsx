const Footer = () => {
    return (
        <footer className='grid grid-cols-3 px-60 mt-14 border-t-2 pt-3 pb-3'>
            <div>
                <h3 className='font-black'>Nosotros</h3>
                <span className='text-blue-500'>Conoce mas</span>
            </div>
            <div>
                <h3 className='font-black'>Servicios</h3>
                <span className='text-blue-500'>Todos los productos</span>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-black'>Hecho para</h3>
                <span className='text-blue-500'>Store avo de Next.js</span>
                <p className='text-blue-500'>andre300.av@gmail.com</p>
                <div className='flex gap-2'>
                    <span>Twitter</span>
                    <span>Github</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
