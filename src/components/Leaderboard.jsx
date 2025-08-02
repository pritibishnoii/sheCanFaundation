import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const API_URL = import.meta.env.VITE_APP_BACKEND_API || 'http://localhost:5000/api';
const Leaderboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/api/leaderboard`)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return (
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        );
      case 2:
        return (
          <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        );
      case 3:
        return (
          <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {rank}
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
      {/* 👻👻👻👻👻👻👻👻👻 */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-800">Top Performers</h1>
          </div>
          <p className="text-gray-600 text-lg">See who's leading the SheCan Foundation Internship Program</p>
        </div>

  {/* 👻👻👻👻👻👻👻👻👻 */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      {/* 👻👻👻👻👻👻👻👻👻 */}
            {data.length >= 3 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🏆 Top 3 Champions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 👻👻👻👻👻👻👻👻👻 */}
                  <div className="order-2 md:order-1">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 text-center border border-gray-200">
                      <div className="flex justify-center mb-4">
                        {getRankIcon(2)}
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                        {data[1]?.name.charAt(0).toUpperCase()}
                      </div>
                      <h3 className="font-bold text-gray-800 mb-1">{data[1]?.name}</h3>
                      <p className="text-2xl font-bold text-gray-600">₹{data[1]?.donations.toLocaleString()}</p>
                    </div>
                  </div>

      {/* 👻👻👻👻👻👻👻👻👻 */}
                  <div className="order-1 md:order-2">
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 text-center border-2 border-yellow-300 transform scale-105">
                      <div className="flex justify-center mb-4">
                        {getRankIcon(1)}
                      </div>
                      <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                        {data[0]?.name.charAt(0).toUpperCase()}
                      </div>
                      <h3 className="font-bold text-gray-800 mb-1">{data[0]?.name}</h3>
                      <p className="text-3xl font-bold text-yellow-600">₹{data[0]?.donations.toLocaleString()}</p>
                      <div className="mt-2">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">🥇 Winner</span>
                      </div>
                    </div>
                  </div>

                {/* 👻👻👻👻👻👻👻👻👻 */}
                  <div className="order-3">
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 text-center border border-orange-200">
                      <div className="flex justify-center mb-4">
                        {getRankIcon(3)}
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                        {data[2]?.name.charAt(0).toUpperCase()}
                      </div>
                      <h3 className="font-bold text-gray-800 mb-1">{data[2]?.name}</h3>
                      <p className="text-2xl font-bold text-orange-600">₹{data[2]?.donations.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

      {/* 👻👻👻👻👻👻👻👻👻 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 Complete Leaderboard</h2>
              <div className="space-y-3">
                {data.map((entry, index) => (
                  <div 
                    key={index}
                    className={`flex items-center p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${
                      index < 3 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200' 
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <div className="flex items-center mr-4">
                      {getRankIcon(index + 1)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          {entry.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{entry.name}</h3>
                          <p className="text-sm text-gray-500">Intern</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-bold text-green-600">₹{entry.donations.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">Total Donations</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

      {/* 👻👻👻👻👻👻👻👻👻 */}
          <div className="text-center mt-8">
            <Link 
              to="/dashboard" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
