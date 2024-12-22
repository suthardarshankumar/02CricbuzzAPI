// import { useState, useCallback, useEffect } from 'react';

// const ResultsByDate = () => {
//     const [selectedDate, setSelectedDate] = useState('');
//     const [matches, setMatches] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const formatDate = (date) => {
//         const d = new Date(date);
//         return !isNaN(d) ? d.toISOString().split('T')[0] : '';
//     };

//     const fetchResultsDataByDate = useCallback(async () => {
//         if (!selectedDate) return;

//         const formattedDate = formatDate(selectedDate);
//         const url = `https://cricket-live-data.p.rapidapi.com/results-by-date/${formattedDate}`;

//         const options = {
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key': '75b80a6392msh7acbe2bbe8a1a22p133a1cjsn4fc500e3c1ed',
//                 'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
//             },
//         };

//         setLoading(true);
//         setError('');

//         try {
//             const response = await fetch(url, options);
//             if (!response.ok) throw new Error('Failed to fetch data');

//             const result = await response.json();
//             if (result?.results?.length > 0) {
//                 setMatches(result.results);
//             } else {
//                 setError('No matches found for this date.');
//             }
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     }, [selectedDate]);

//     useEffect(() => {
//         if (selectedDate) fetchResultsDataByDate();
//     }, [selectedDate, fetchResultsDataByDate]);

//     const handleDateChange = (e) => {
//         setSelectedDate(e.target.value);
//     };

//     return (
//         <div className="w-full min-h-screen px-24 bg-slate-900">
//             <div className="w-full flex justify-center pt-10">
//                 <input
//                     type="date"
//                     className="w-40 px-3 py-3 rounded-md"
//                     value={selectedDate}
//                     onChange={handleDateChange}
//                 />
//             </div>

//             {loading && (
//                 <div className="text-center text-white mt-10">Loading...</div>
//             )}

//             {error && (
//                 <div className="text-center text-red-500 mt-10">{error}</div>
//             )}

//             {matches && matches.length > 0 && (
//                 <div>
//                     <table className="table-fixed w-full text-slate-50 mt-20">
//                         <thead className="border-b">
//                             <tr>
//                                 <th className="p-5">Away Country</th>
//                                 <th className="p-5">Home Country</th>
//                                 <th className="p-5">Match No</th>
//                                 <th className="p-5">Venue</th>
//                                 <th className="p-5">Result</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {matches.map(({ id, away, home, match_subtitle, venue, result }) => (
//                                 <tr key={id} className="hover:text-slate-900 hover:bg-slate-50">
//                                     <td className="p-4">{away.name}</td>
//                                     <td className="p-4">{home.name}</td>
//                                     <td className="p-4">{match_subtitle}</td>
//                                     <td className="p-4">{venue}</td>
//                                     <td className="p-4">{result}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ResultsByDate;

import { useState, useCallback, useEffect } from 'react';

const ResultsByDate = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchResultsDataByDate = useCallback(async () => {
        if (!selectedDate) return;

        const url = `https://cricket-live-data.p.rapidapi.com/results-by-date/${selectedDate}`;

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '75b80a6392msh7acbe2bbe8a1a22p133a1cjsn4fc500e3c1ed',
                'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
            },
        };

        setLoading(true);
        setError('');

        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error('Failed to fetch data');

            const result = await response.json();
            if (result?.results?.length > 0) {
                setMatches(result.results);
            } else {
                setError('No matches found for this date.');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [selectedDate]);

    useEffect(() => {
        if (selectedDate) fetchResultsDataByDate();
    }, [selectedDate, fetchResultsDataByDate]);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    return (
        <div className="w-full min-h-screen px-24 bg-slate-900">
            <div className="w-full flex justify-center pt-10">
                <input
                    type="date"
                    className="w-40 px-3 py-3 rounded-md"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </div>

            {loading && (
                <div className="text-center text-white mt-10">Loading...</div>
            )}

            {error && (
                <div className="text-center text-red-500 mt-10">{error}</div>
            )}

            {matches && matches.length > 0 && (
                <div>
                    <table className="table-fixed w-full text-slate-50 mt-20">
                        <thead className="border-b">
                            <tr>
                                <th className="p-5">Away Country</th>
                                <th className="p-5">Home Country</th>
                                <th className="p-5">Match No</th>
                                <th className="p-5">Venue</th>
                                <th className="p-5">Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {matches.map(({ id, away, home, match_subtitle, venue, result }) => (
                                <tr key={id} className="hover:text-slate-900 hover:bg-slate-50">
                                    <td className="p-4">{away.name}</td>
                                    <td className="p-4">{home.name}</td>
                                    <td className="p-4">{match_subtitle}</td>
                                    <td className="p-4">{venue}</td>
                                    <td className="p-4">{result}</td>
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
