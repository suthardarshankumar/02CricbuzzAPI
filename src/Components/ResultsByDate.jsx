import { useState, useCallback, useEffect } from 'react';

const ResultsByDate = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [matches, setMatches] = useState([]);

    const fetchResultsDataByDate = useCallback(async () => {
        if (!selectedDate) {
            console.warn("No date selected.");
            return;
        }

        const url = `https://cricket-live-data.p.rapidapi.com/results-by-date/${selectedDate}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '94a0fe8e3fmshbdfb3b23428c97ap1915dajsnb04a9b956e43',
                'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log("API Response:", result);
            setMatches(result.results || []);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    }, [selectedDate]);

    useEffect(() => {
        fetchResultsDataByDate();
    }, [fetchResultsDataByDate]);

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
            {matches && matches.length > 0 && (
                <div>
                    <table className="table-fixed w-full text-slate-50 mt-20">
                        <thead className='border-b'>
                            <tr>
                                <th className='p-5'>Away Country</th>
                                <th className='p-5'>Home Country</th>
                                <th className='p-5'>Match No</th>
                                <th className='p-5'>Venue</th>
                                <th className='p-5'>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {matches.map(({ id, away, home, match_subtitle, venue, result }) => (
                                <tr key={id} className='hover:text-slate-900 hover:bg-slate-50'>
                                    <td className='p-4'>{away.name}</td>
                                    <td className='p-4'>{home.name}</td>
                                    <td className='p-4'>{match_subtitle}</td>
                                    <td className='p-4'>{venue}</td>
                                    <td className='p-4'>{result}</td>
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