import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

interface CryptoData {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
}

const API_KEY = 'QREUM4AHM1R3S8BY';

const CRYPTOS = [
  { symbol: 'BTC', name: 'Bitcoin' },
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'LTC', name: 'Litecoin' },
  { symbol: 'XRP', name: 'Ripple' },
  { symbol: 'BCH', name: 'Bitcoin Cash' },
];

const BASE_URL = 'https://www.alphavantage.co/query?function=';
const recordsPerPage = 25;

const CryptoTable: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [selectedCrypto, setSelectedCrypto] = useState<string>('BTC');
  const [cryptoData, setCryptoData] = useState<Record<string, CryptoData> | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchData = async () => {
    const functionType = timeframe === 'daily'
      ? 'DIGITAL_CURRENCY_DAILY'
      : timeframe === 'weekly'
      ? 'DIGITAL_CURRENCY_WEEKLY'
      : 'DIGITAL_CURRENCY_MONTHLY';

    const url = `${BASE_URL}${functionType}&symbol=${selectedCrypto}&market=EUR&apikey=${API_KEY}`;
    const result = await axios.get(url);

    const timeSeriesKey = `Time Series (Digital Currency ${timeframe.charAt(0).toUpperCase() + timeframe.slice(1)})`;
    setCryptoData(result.data[timeSeriesKey]);
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchData();
  }, [timeframe, selectedCrypto]);

  const totalRecords = cryptoData ? Object.keys(cryptoData).length : 0;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const paginatedData = cryptoData 
    ? Object.keys(cryptoData).slice(startIndex, startIndex + recordsPerPage)
    : [];

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container mx-auto my-4">
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 mb-4 ">
        <div className="flex space-x-2 mb-4 md:mb-0">
          <button 
            onClick={() => setTimeframe('daily')} 
            className={`px-4 py-2 ${timeframe === 'daily' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-lg`}
          >
            Daily
          </button>
          <button 
            onClick={() => setTimeframe('weekly')} 
            className={`px-4 py-2 ${timeframe === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-lg`}
          >
            Weekly
          </button>
          <button 
            onClick={() => setTimeframe('monthly')} 
            className={`px-4 py-2 ${timeframe === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-lg`}
          >
            Monthly
          </button>
        </div>

        <select 
          id="cryptos" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedCrypto} 
          onChange={(e) => setSelectedCrypto(e.target.value)}
        >
          {CRYPTOS.map(crypto => (
            <option key={crypto.symbol} value={crypto.symbol}>{crypto.name}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Cryptocurrency</th>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Open</th>
              <th scope="col" className="px-6 py-3">High</th>
              <th scope="col" className="px-6 py-3">Low</th>
              <th scope="col" className="px-6 py-3">Close</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData && paginatedData.map((date, idx) => (
              <tr key={idx} className="bg-white border-b">
                <td className="px-6 py-4">{selectedCrypto}</td>
                <td className="px-6 py-4">{date}</td>
                <td className="px-6 py-4">{parseFloat(cryptoData[date]['1. open']).toFixed(2)}</td>
                <td className="px-6 py-4">{parseFloat(cryptoData[date]['2. high']).toFixed(2)}</td>
                <td className="px-6 py-4">{parseFloat(cryptoData[date]['3. low']).toFixed(2)}</td>
                <td className="px-6 py-4">{parseFloat(cryptoData[date]['4. close']).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CryptoTable;
