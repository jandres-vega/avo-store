import {BuildingStorefrontIcon, ShoppingBagIcon} from '@heroicons/react/24/outline';

const NavBar = () => {
    return (
        <nav className='flex justify-around py-10 border-b-2 mb-6'>
            <div className='flex gap-5 cursor-pointer'>
                <BuildingStorefrontIcon className='h-10 w-10 text-green-600' />
                <span className='text-3xl'>Store Avo</span>
            </div>
            <div className='flex items-center gap-5'>
                <ShoppingBagIcon className='h-10 w-10 text-green-600 cursor-pointer'/>
                <span>Carrito (0)</span>
            </div>
        </nav>
    );
};

export default NavBar;
