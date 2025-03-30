import React, { useEffect, useState } from 'react';
import { Sparkles, Moon, Sun, Heart } from 'lucide-react';

function App() {
  const [day, setDay] = useState(1);
  
  const navratriDays = [
    { color: 'red', goddess: 'Maa Shailputri', meaning: 'Daughter of Mountains' },
    { color: 'royal-blue', goddess: 'Maa Brahmacharini', meaning: 'Mother of Devotion' },
    { color: 'yellow', goddess: 'Maa Chandraghanta', meaning: 'Bearer of the Moon Crescent' },
    { color: 'green', goddess: 'Maa Kushmanda', meaning: 'Creator of the Universe' },
    { color: 'gray', goddess: 'Maa Skandamata', meaning: 'Mother of Skanda' },
    { color: 'orange', goddess: 'Maa Katyayani', meaning: 'Warrior Goddess' },
    { color: 'white', goddess: 'Maa Kaalratri', meaning: 'The Dark Night' },
    { color: 'pink', goddess: 'Maa Mahagauri', meaning: 'The Fair One' },
    { color: 'purple', goddess: 'Maa Siddhidatri', meaning: 'Bestower of Supernatural Powers' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDay((prevDay) => (prevDay % 9) + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentDay = navratriDays[day - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-pink-100 flex flex-col items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className={`absolute animate-ping text-${currentDay.color}-500 opacity-20`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `scale(${Math.random() + 0.5})`,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Moon className="w-8 h-8 text-purple-600 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
            Happy Navratri
          </h1>
          <Sun className="w-8 h-8 text-yellow-500 animate-pulse" />
        </div>

        <div className="mb-8">
          <p className="text-xl md:text-2xl text-gray-700 mb-2">
            Celebrating Day {day} of the Divine Festival
          </p>
          <div className="flex items-center justify-center gap-2">
            <Heart className={`w-6 h-6 text-${currentDay.color}-500`} />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              {currentDay.goddess}
            </h2>
            <Heart className={`w-6 h-6 text-${currentDay.color}-500`} />
          </div>
          <p className="text-lg text-gray-600 italic">{currentDay.meaning}</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-9 gap-2 mb-8">
          {navratriDays.map((dayInfo, index) => (
            <div
              key={index}
              className={`h-2 rounded-full ${
                index + 1 === day ? 'animate-pulse' : ''
              } bg-${dayInfo.color}-500`}
            />
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            May the divine blessings of Maa Durga bring you strength, wisdom, and prosperity.
          </p>
          <div className="flex justify-center gap-4">
            {['जय माता दी', 'शुभ नवरात्री', 'दुर्गा दुर्गा'].map((text, index) => (
              <span
                key={index}
                className="text-xl font-semibold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-600">
        <p>The colors change every few seconds to represent each day of Navratri</p>
      </div>
    </div>
  );
}

export default App;
