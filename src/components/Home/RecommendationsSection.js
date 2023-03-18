import React from "react";

function RecommendationsSection() {
  // Dummy data for recommendations
  const recommendations = [
    {
      id: 1,
      name: "Jane Smith",
      image: "https://via.placeholder.com/150",
      skills: [
        "Software Development",
        "Agile Methodologies",
        "Team Management",
      ],
    },
    {
      id: 2,
      name: "Bob Johnson",
      image: "https://via.placeholder.com/150",
      skills: ["Project Management", "Budgeting", "Risk Management"],
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      image: "https://via.placeholder.com/150",
      skills: [
        "Marketing Strategy",
        "Social Media Marketing",
        "Content Creation",
      ],
    },
    {
      id: 4,
      name: "Jane Smith",
      image: "https://via.placeholder.com/150",
      skills: [
        "Software Development",
        "Agile Methodologies",
        "Team Management",
      ],
    },
    {
      id: 5,
      name: "Bob Johnson",
      image: "https://via.placeholder.com/150",
      skills: ["Project Management", "Budgeting", "Risk Management"],
    },
    {
      id: 6,
      name: "Lisa Rodriguez",
      image: "https://via.placeholder.com/150",
      skills: [
        "Marketing Strategy",
        "Social Media Marketing",
        "Content Creation",
      ],
    },
  ];

  return (
    <div className="">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        People You May Know
      </h3>

      {/* Recommendation Cards */}
      <div className="grid grid-cols-1 gap-4  overflow-y-scroll h-[90vh]">
        {recommendations.map((recommendation) => (
          <div
            key={recommendation.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            {/* Image */}
            <img
              src={recommendation.image}
              alt={recommendation.name}
              className="rounded-full h-20 w-20 object-cover mb-2"
            />

            {/* Name */}
            <h4 className="text-base font-semibold text-gray-800 mb-1">
              {recommendation.name}
            </h4>

            {/* Skills */}
            <p className="text-sm text-gray-500">
              {recommendation.skills.join(", ")}
            </p>
          </div>
        ))}
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default RecommendationsSection;