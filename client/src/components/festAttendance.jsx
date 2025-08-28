// import React, { useEffect, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { motion } from "framer-motion";
// import { Calendar, Home, Users, Filter, Search, RefreshCw } from "lucide-react";
// import "../styles/index.css";

// const API_URL = import.meta.env.VITE_API_URL;

// const response = {
//   studentList: [
//     {
//       _id: "68b0518a9797e9f7758c3d88",
//       studentId: "202355904",
//       fullName: "John Moises",
//       courseYear: "BSCOE 21M1",
//       house: "makakalikasan",
//       backendDate: "2025-08-28",
//       noAttend: 1,
//     },
//     {
//       _id: "68b05bcf13247b040d478f15",
//       studentId: "202412345",
//       fullName: "Maria Lopez",
//       courseYear: "BSIT 22A2",
//       house: "makabansa",
//       backendDate: "2025-08-28",
//       noAttend: 1,
//     },
//     {
//       _id: "68b05bea13247b040d478f16",
//       studentId: "202398765",
//       fullName: "Carlos Reyes",
//       courseYear: "BSCS 21B1",
//       house: "makatao",
//       backendDate: "2025-08-28",
//       noAttend: 1,
//     },
//     {
//       _id: "68b05bf313247b040d478f17",
//       studentId: "202376543",
//       fullName: "Angela Santos",
//       courseYear: "BSEE 23C1",
//       house: "makakalikasan",
//       backendDate: "2025-09-02",
//       noAttend: 1,
//     },
//     {
//       _id: "68b05bfe13247b040d478f18",
//       studentId: "202354321",
//       fullName: "Sophia Gonzales",
//       courseYear: "BSARCH 24D1",
//       house: "makatao",
//       backendDate: "2025-09-05",
//       noAttend: 1,
//     },
//   ],
// };


// export default function ParticipantList() {
//   const [selectedHouse, setSelectedHouse] = useState("All");
//   const [selectedYear, setSelectedYear] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [participants, setParticipants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const setParticipantsTest = () => {
//     setParticipants(response.studentList)
//   }

//   const getParticipants = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const res = await fetch(`${API_URL}/getstudents`, {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       });

//       if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

//       const data = await res.json();
//       setParticipants(data.studentList || []);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // getParticipants();
//     setParticipantsTest()
//   }, []);

//   // Filter logic
//   const filteredParticipants = participants.filter((p) => {
//     const matchesHouse = selectedHouse === "All" || p.house === selectedHouse;
//     const matchesYear = selectedYear === "All" || p.courseYear === selectedYear;
//     const matchesSearch = p.fullName
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());

//     return matchesHouse && matchesYear && matchesSearch;
//   });

//   // Extract unique values for dropdowns
//   const uniqueHouses = ["All", ...new Set(participants.map((p) => p.house))];
//   const uniqueYears = ["All", ...new Set(participants.map((p) => p.courseYear))];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black p-8">
//       {/* Event Header */}
//       <motion.h1
//         className="text-4xl font-extrabold text-purple-400 drop-shadow-md mb-6 tracking-wide"
//         initial={{ y: -40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         ESA FESTIVAL
//       </motion.h1>

//       {/* Filters Section */}
//       <div className="flex flex-wrap items-center justify-between w-full max-w-4xl mb-6 gap-4 bg-gray-900/60 border border-gray-800 rounded-xl p-4 shadow-lg">
//         <div className="flex items-center gap-2 text-purple-300">
//           <Filter className="w-5 h-5" />
//           <span className="font-semibold">Filters</span>
//         </div>

//         <div className="flex flex-wrap gap-4 items-center">
//           {/* Search Input */}
//           <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-700 focus-within:ring-2 focus-within:ring-purple-500">
//             <Search className="w-4 h-4 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search by name..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="bg-transparent outline-none text-sm text-gray-200 placeholder-gray-500 w-40"
//             />
//           </div>

//           {/* House Filter */}
//           <select
//             value={selectedHouse}
//             onChange={(e) => setSelectedHouse(e.target.value)}
//             className="bg-gray-800 text-gray-200 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500"
//           >
//             {uniqueHouses.map((house, i) => (
//               <option key={i} value={house}>
//                 {house}
//               </option>
//             ))}
//           </select>

//           {/* Year Filter */}
//           <select
//             value={selectedYear}
//             onChange={(e) => setSelectedYear(e.target.value)}
//             className="bg-gray-800 text-gray-200 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500"
//           >
//             {uniqueYears.map((year, i) => (
//               <option key={i} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>

//           {/* Refresh Button */}
//           <button
//             onClick={getParticipants}
//             disabled={loading}
//             className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md transition disabled:opacity-50"
//           >
//             <RefreshCw className="w-4 h-4" />
//             {loading ? "Refreshing..." : "Refresh"}
//           </button>
//         </div>
//       </div>

//       {/* Scrollable list */}
//       <ScrollArea className="h-[500px] w-full max-w-4xl rounded-2xl backdrop-blur-md bg-gray-900/70 border border-gray-800 shadow-2xl p-6">
//         {loading ? (
//           <p className="text-center text-purple-400">Loading participants...</p>
//         ) : error ? (
//           <p className="text-center text-red-400">Error: {error}</p>
//         ) : (
//           <div className="grid gap-6">
//             {filteredParticipants.length > 0 ? (
//               filteredParticipants.map((p) => (
//                 <motion.div
//                   key={p._id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Card className="rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform">
//                     <CardContent className="p-5 space-y-2">
//                       <h2 className="text-xl font-semibold text-purple-300">
//                         {p.fullName}
//                       </h2>
//                       <p className="text-sm text-gray-300 flex items-center gap-2">
//                         <Users className="w-4 h-4 text-purple-400" />
//                         {p.courseYear}
//                       </p>
//                       <p className="text-sm text-gray-300 flex items-center gap-2">
//                         <Home className="w-4 h-4 text-purple-400" />
//                         {p.house}
//                       </p>
//                       <p className="text-sm text-gray-300 flex items-center gap-2">
//                         <Calendar className="w-4 h-4 text-purple-400" />
//                         Days Attended:{" "}
//                         <span className="font-medium text-purple-200">
//                           {p.noAttend}
//                         </span>
//                       </p>
//                       <p className="text-xs text-gray-500">
//                         Backend Date: {p.backendDate}
//                       </p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))
//             ) : (
//               <p className="text-center text-gray-400">No participants found.</p>
//             )}
//           </div>
//         )}
//       </ScrollArea>
//     </div>
//   );
// }










import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Home, Users, Filter, Search } from "lucide-react";
import "../styles/index.css";

// Dummy response for testing
const dummyResponse = {
  studentList: [
    {
      _id: "68b0518a9797e9f7758c3d88",
      studentId: "202355904",
      fullName: "John Moises",
      courseYear: "BSCOE 21M1",
      house: "makakalikasan",
      backendDate: "2025-08-28",
      noAttend: 1,
    },
    {
      _id: "68b05bcf13247b040d478f15",
      studentId: "202412345",
      fullName: "Maria Lopez",
      courseYear: "BSIT 22A2",
      house: "makabansa",
      backendDate: "2025-08-28",
      noAttend: 1,
    },
    {
      _id: "68b05bea13247b040d478f16",
      studentId: "202398765",
      fullName: "Carlos Reyes",
      courseYear: "BSCS 21B1",
      house: "makatao",
      backendDate: "2025-08-28",
      noAttend: 1,
    },
    {
      _id: "68b05bf313247b040d478f17",
      studentId: "202376543",
      fullName: "Angela Santos",
      courseYear: "BSEE 23C1",
      house: "makakalikasan",
      backendDate: "2025-09-02",
      noAttend: 1,
    },
    {
      _id: "68b05bfe13247b040d478f18",
      studentId: "202354321",
      fullName: "Sophia Gonzales",
      courseYear: "BSARCH 24D1",
      house: "makatao",
      backendDate: "2025-09-05",
      noAttend: 1,
    },
  ],
};

export default function ParticipantList() {
  const [participants, setParticipants] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setParticipants(dummyResponse.studentList);
  }, []);

  // Filtering logic
  const filteredParticipants = participants.filter((p) => {
    const matchesHouse = selectedHouse === "All" || p.house === selectedHouse;
    const matchesYear = selectedYear === "All" || p.courseYear === selectedYear;
    const matchesSearch = p.fullName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesHouse && matchesYear && matchesSearch;
  });

  // Dropdown values
  const uniqueHouses = ["All", ...new Set(participants.map((p) => p.house))];
  const uniqueYears = ["All", ...new Set(participants.map((p) => p.courseYear))];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black p-8">
      {/* Event Header */}
      <motion.h1
        className="text-4xl font-extrabold text-purple-400 drop-shadow-md mb-6 tracking-wide"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        ESA FESTIVAL
      </motion.h1>

      {/* Filters Section */}
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl mb-6 gap-4 bg-gray-900/60 border border-gray-800 rounded-xl p-4 shadow-lg">
        <div className="flex items-center gap-2 text-purple-300">
          <Filter className="w-5 h-5" />
          <span className="font-semibold">Filters</span>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          {/* Search Input */}
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-700 focus-within:ring-2 focus-within:ring-purple-500">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none text-sm text-gray-200 placeholder-gray-500 w-40"
            />
          </div>

          {/* House Filter */}
          <select
            value={selectedHouse}
            onChange={(e) => setSelectedHouse(e.target.value)}
            className="bg-gray-800 text-gray-200 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500"
          >
            {uniqueHouses.map((house, i) => (
              <option key={i} value={house}>
                {house}
              </option>
            ))}
          </select>

          {/* Year Filter */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="bg-gray-800 text-gray-200 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500"
          >
            {uniqueYears.map((year, i) => (
              <option key={i} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Scrollable List */}
      <ScrollArea className="h-[500px] w-full max-w-4xl rounded-2xl backdrop-blur-md bg-gray-900/70 border border-gray-800 shadow-2xl p-6">
        <div className="grid gap-6">
          {filteredParticipants.length > 0 ? (
            filteredParticipants.map((p) => (
              <motion.div
                key={p._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform">
                  <CardContent className="p-5 space-y-2">
                    <h2 className="text-xl font-semibold text-purple-300">
                      {p.fullName}
                    </h2>
                    <p className="text-sm text-gray-300 flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-400" />
                      {p.courseYear}
                    </p>
                    <p className="text-sm text-gray-300 flex items-center gap-2">
                      <Home className="w-4 h-4 text-purple-400" />
                      {p.house}
                    </p>
                    <p className="text-sm text-gray-300 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      Days Attended:{" "}
                      <span className="font-medium text-purple-200">
                        {p.noAttend}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500">
                      Backend Date: {p.backendDate}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-400">No participants found.</p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
