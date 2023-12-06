import {ArchiveBoxIcon} from '@heroicons/react/24/solid';
const Header = () => {
    return (
        <div className='flex justify-center pt-6 items-center'>
            <h1 className='text-5xl mr-6'>STORE</h1>
            <ArchiveBoxIcon className='h-10 w-10 text-green-600' />
            <h1 className='text-5xl ml-6'>AVO</h1>
        </div>
    );
};

export default Header;
