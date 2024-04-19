import { useEffect, useState, useCallback } from 'react';

const ICCPlayerRanking = () => {
    const [matchType, setMatchType] = useState('');
    const [playerRank, setPlayerRank] = useState([]);

    const handleMatchChange = (e) => {
        setMatchType(e.target.value);
    }

    const fetchICCPlayerRanking = useCallback(async () => {
        const url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen?formatType=${matchType}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4d1d17eb4bmsh0eced130bef1d07p11b314jsnbdce77625305',
                'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const resultData = await response.json();
            console.log(resultData);
            if (resultData.rank) {
                setPlayerRank(resultData.rank);
            } else {
                setPlayerRank([]);
            }
        } catch (error) {
            console.error(error);
        }
    }, [matchType]);

    useEffect(() => {
        fetchICCPlayerRanking();
    }, [fetchICCPlayerRanking]);

    return (
        <div className='w-full min-h-screen px-24 bg-slate-900'>
            <div className='w-full flex justify-center pt-10'>
                <label htmlFor="matchType" className='text-slate-100 text-2xl'>Match Type: </label>
                <select
                    name='matchType'
                    id='matchType'
                    value={matchType}
                    className='rounded-md ml-3 px-4 py-2'
                    onChange={handleMatchChange}
                >
                    <option value='test'>Test</option>
                    <option value='odi'>ODI</option>
                    <option value='t20'>T20I</option>
                </select>
            </div>
            {playerRank.length > 0 && (
                <div className='pb-20'>
                    <table className="table-fixed w-full text-slate-50 mt-20">
                        <thead className='border-b'>
                            <tr className='text-right'>
                                <th className='p-5 text-center'>Rank</th>
                                <th className='p-5'>Name</th>
                                <th className='p-5'>Country</th>
                                <th className='p-5'>Average</th>
                                <th className='p-5'>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {playerRank.map(player => (
                                <tr key={player.id} className='text-right hover:text-slate-900 hover:bg-slate-50'>
                                    <td className='p-4 text-center'>{player.rank}</td>
                                    <td className='p-4'>{player.name}</td>
                                    <td className='p-4'>{player.country}</td>
                                    <td className='p-4'>{player.avg}</td>
                                    <td className='p-4'>{player.rating}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ICCPlayerRanking;
