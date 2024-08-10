import React, { useState, useEffect } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState('description');
  const [feedback, setFeedback] = useState([]);
  const [newFeedback, setNewFeedback] = useState('');
  const [rating, setRating] = useState(0);


  const saveFeedbackToLocalStorage = (feedbackData) => {
    //localStorage.setItem('productFeedback', JSON.stringify(feedbackData));
    console.log("a")
  };

  // Load feedback from local storage when component mounts
  useEffect(() => {
    const storedFeedback = localStorage.getItem('productFeedback');
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback));
    }
  }, []);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (newFeedback.trim() && rating > 0) {
      const updatedFeedback = [{ text: newFeedback, rating }, ...feedback];
      setFeedback(updatedFeedback);
      saveFeedbackToLocalStorage(updatedFeedback);
      setNewFeedback('');
      setRating(0);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <p className="text-gray-700">
            This product is the best-selling product of last year.
          </p>
        );
      case 'additionalInfo':
        return (
          <div>
            <table className="min-w-full bg-white border border-gray-300">
              <tbody>
                <tr>
                  <th className="py-2 px-4 bg-gray-100 border-r text-left font-semibold">Size</th>
                  <td className="py-2 px-4 text-gray-700">XL, L, M, S, XS</td>
                </tr>
                <tr>
                  <th className="py-2 px-4 bg-gray-100 border-r text-left font-semibold">Color</th>
                  <td className="py-2 px-4 text-gray-700">Black, Green, Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'rating':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer Feedback</h3>
            <div className="mb-2 flex flex-row gap-8">
                <label className="block mb-1 text-gray-700">Filter</label>
                <select
                  value={rating}
                  onChange={(e) => setRating(parseInt(e.target.value))}
                  className="border rounded p-1 w-24"
                >
                  <option value="Sort">Sort</option>
                  <option value="Rating">Rating</option>
                </select>
              </div>
            <ul className="mb-4">
              {feedback.length === 0 ? (
                <li className="text-gray-300">No feedback yet.</li>
              ) : (
                feedback.map((item, index) => (
                  <div key={index} className='flex flex-row gap-8 mb-2 border border-spacing-0 p-3 rounded-xl'>
                    <div className=''>
                      <img src="src/assets/profile.png" alt="profile" className='w-12 h-12'/>
                    </div>
                    <div>
                      <li className="text-gray-700">{item.text} </li>
                      <span className="text-yellow-500">{'★'.repeat(item.rating)}</span>
                    </div>
                  </div>
                ))
              )}
            </ul>
            <h3 className="text-lg font-semibold mb-2">Leave Your Feedback</h3>
            <form onSubmit={handleFeedbackSubmit} className=' border border-black rounded-2xl p-3'>
              <textarea
                value={newFeedback}
                onChange={(e) => setNewFeedback(e.target.value)}
                placeholder="Enter your feedback here"
                rows="4"
                cols="50"
                className="border rounded p-2 w-full mb-2"
              />
              <div className="mb-2">
                <label className="block mb-1 text-gray-700">Rating:</label>
                <select
                  value={rating}
                  onChange={(e) => setRating(parseInt(e.target.value))}
                  className="border rounded p-2 w-full"
                >
                  <option value="0">Select Rating</option>
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="about-section mt-36 p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">About Product</h1>
      <div className="tabs flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('description')}
          className={`px-4 py-2 rounded ${activeTab === 'description' ? 'bg-slate-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('additionalInfo')}
          className={`px-4 py-2 rounded ${activeTab === 'additionalInfo' ? 'bg-slate-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Additional Info
        </button>
        <button
          onClick={() => setActiveTab('rating')}
          className={`px-4 py-2 rounded ${activeTab === 'rating' ? 'bg-slate-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Rating
        </button>
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default About;
