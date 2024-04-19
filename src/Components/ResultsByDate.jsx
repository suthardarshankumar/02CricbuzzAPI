import { useEffect, useState, useCallback } from 'react';

const ResultsByDate = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [matches, setMatches] = useState([]);

    const fetchResultsDataByDate = useCallback(async () => {
        if (!selectedDate) return;

        const url = `https://cricket-live-data.p.rapidapi.com/results-by-date/${selectedDate}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4d1d17eb4bmsh0eced130bef1d07p11b314jsnbdce77625305',
                'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setMatches(result.results);
        } catch (error) {
            console.error(error);
        }
    }, [selectedDate]); // Memoize the function with selectedDate as dependency

    useEffect(() => {
        fetchResultsDataByDate();
    }, [fetchResultsDataByDate]); // Call fetchResultsDataByDate when it changes

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    return (
        <div className='w-full min-h-screen px-24 bg-slate-900'>
            <div className='w-full flex justify-center pt-10'>
                <input
                    type='date'
                    className='w-40 px-3 py-3 rounded-md'
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </div>
            {matches.length > 0 && (
                <div>
                    <table className="table-fixed w-full text-slate-50 mt-20">
                        <thead className='border-b'>
                            <tr className=''>
                                <th className='p-5'>Away Country</th>
                                <th className='p-5'>Home Country</th>
                                <th className='p-5'>Match No</th>
                                <th className='p-5'>Venue</th>
                                <th className='p-5'>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {matches.map(match => (
                                <tr key={match.id} className='hover:text-slate-900 hover:bg-slate-50'>
                                    <td className='p-4'>{match.away.name}</td>
                                    <td className='p-4'>{match.home.name}</td>
                                    <td className='p-4'>{match.match_subtitle}</td>
                                    <td className='p-4'>{match.venue}</td>
                                    <td className='p-4'>{match.result}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ResultsByDate;
