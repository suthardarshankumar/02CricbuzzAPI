import React, { useEffect, useState, useCallback } from 'react';

const PlayerStat = () => {
    const [playerID, setPlayerID] = useState(1413);
    const [playerType, setPlayerType] = useState('');
    const [playerStatsData, setPlayerStatsData] = useState(null);

    const handlePlayerID = (e) => {
        setPlayerID(e.target.value);
    }

    const handlePlayerType = (e) => {
        setPlayerType(e.target.value);
    }

    const fetchPlayerStats = useCallback(async () => {
        const url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${playerID}/${playerType}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4d1d17eb4bmsh0eced130bef1d07p11b314jsnbdce77625305',
                'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setPlayerStatsData(result);
        } catch (error) {
            console.log(error);
        }
    }, [playerID, playerType]);

    useEffect(() => {
        fetchPlayerStats();
    }, [fetchPlayerStats, playerType])

    return (
        <>
            <div className='w-full min-h-screen px-24 bg-slate-900'>
                <div className='w-full flex justify-center pt-10 gap-10'>
                    <div className='flex gap-2'>
                        <label htmlFor="matchType" className='text-slate-100 text-2xl'>Select Player</label>
                        <select
                            name='matchType'
                            id='matchType'
                            value={playerID}
                            className='rounded-md ml-3 px-4 py-2'
                            onChange={handlePlayerID}
                        >
                            <option value='1413'>Virat Kohli</option>
                            <option value='25'>Sachin Tendulkar</option>
                            <option value='27'>Rahul Dravid</option>
                            <option value='265'>MS Dhoni</option>
                            <option value='576'>Rohit Sharma</option>
                            <option value='98'>Anil Kumble</option>
                            <option value='9311'>Jasprit Bumrah</option>
                            <option value='10744'>Rishabh Pant</option>
                            <option value='587'>Ravindra Jadeja</option>
                            <option value='2258'>Jos Buttler</option>
                            <option value='9428'>Shreyas Iyer</option>
                            <option value='11808'>Shubman Gill</option>
                            <option value='8271'>Sanju Samson</option>
                            <option value='247'>Chris Gayle</option>
                            <option value='9789'>Shimron Hetmyer</option>
                            <option value='7736'>Andre Russell</option>
                            <option value='8110'>Carlos Brathwaite</option>
                            <option value='9406'>Nicholas Pooran</option>
                            <option value='7909'>Mohammed Shami</option>
                            <option value='6557'>Ben Stokes</option>
                            <option value='10420'>Sam Curran</option>
                            <option value='1739'>David Warner</option>
                            <option value='8497'>Travis Head</option>
                            <option value='7662'>Glenn Maxwell</option>
                            <option value='8989'>Marcus Stoinis</option>
                            <option value='8095'>Pat Cummins</option>
                            <option value='7710'>Mitchell Starc</option>
                            <option value='6258'>Josh Hazlewood</option>
                            <option value='1457'>Martin Guptill</option>
                            <option value='6326'>Kane Williamson</option>
                            <option value='8983'>James Neesham</option>
                            <option value='8117'>Trent Boult</option>
                            <option value='10100'>Mitchell Santner</option>
                            <option value='7825'>Faf du Plessis</option>
                            <option value='6349'>David Miller</option>
                            <option value='9582'>Aiden Markram</option>
                            <option value='8520'>Quinton de Kock</option>
                            <option value='9585'>Kagiso Rabada</option>
                        </select>
                    </div>
                    <div className='flex gap-2'>
                        <label htmlFor="matchType" className='text-slate-100 text-2xl'>Select Batter ya Bowler</label>
                        <select
                            name='playerType'
                            id='playerType'
                            value={playerType}
                            className='rounded-md ml-3 px-4 py-2'
                            onChange={handlePlayerType}>
                            <option value=''>Select...</option>
                            <option value='batting'>Batter</option>
                            <option value='bowling'>Bowler</option>
                        </select>
                    </div>
                </div>
                {playerStatsData && Object.keys(playerStatsData).length > 0 && (
                    <div className='pb-20'>
                        {playerStatsData.appIndex && (
                            <h1 className='text-slate-50 text-3xl text-center mt-10'>{playerStatsData.appIndex.seoTitle}</h1>
                        )}
                        <table className="table-fixed w-full text-slate-50 mt-20">
                            <thead className='border-b'>
                                <tr className='text-right'>
                                    <th className='p-5'>Row Header</th>
                                    <th className='p-5'>Test</th>
                                    <th className='p-5'>ODI</th>
                                    <th className='p-5'>T20I</th>
                                    <th className='p-5'>IPL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {playerStatsData.values && playerStatsData.values.map((player, index) => (
                                    <tr key={index} className='text-right hover:text-slate-900 hover:bg-slate-50'>
                                        {player.values.map((value, index) => (
                                            <td className='p-5' key={index}>{value}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    )
}

export default PlayerStat;




