import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="flex align-middle w-full bg-slate-900 border-b border-slate-50 px-8 py-4 text-slate-100 text-xl font-mono gap-12">
                <Link to='/' className=''>Date by Results</Link>
                <Link to='/icc-player-ranking' className='text-xl'>ICC Player Ranking</Link>
                <Link to='/player-stats' className='text-xl'>Player Stats</Link>
                {/* <h1>Home</h1> */}
            </nav>
        </>
    )
}

export default Navbar;