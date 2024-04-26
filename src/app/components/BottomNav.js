import Link from 'next/link';
import { RiMovieLine } from 'react-icons/ri';
import { BsTicket } from 'react-icons/bs';
import { IoBookmarkOutline } from 'react-icons/io5';

const BottomNav = () => {
    return (
        <div className="btm-nav" style={{ maxWidth: "405px" }}>
            <Link href="#">

                <RiMovieLine className="icon" />

            </Link>
            <Link href="/signin">

                <BsTicket className="icon rotated-icon" />

            </Link>
            <Link href="/favourites">

                <IoBookmarkOutline className="icon" />

            </Link>
        </div>
    );
}

export default BottomNav;
