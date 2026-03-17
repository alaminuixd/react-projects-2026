import React, { useState } from "react";
import RatingStars from "./RatingStars";

/**
 * ProductDetailsTab Component
 * @param {Array} tabs - The tabsData array containing title, type, and content
 */
const ProductDetailsTab = ({ tabs }) => {
  // Default to the first tab's title
  const [activeTabTitle, setActiveTabTitle] = useState(tabs[0]?.title);

  // Find the currently active tab object based on the title state
  const activeTab = tabs.find((tab) => tab.title === activeTabTitle);

  // Helper function to render different UI based on the "type" property
  const renderTabContent = () => {
    if (!activeTab) return null;

    switch (activeTab.type) {
      case "text":
        return (
          <div className="space-y-4 text-gray-600 animate-in fade-in duration-500">
            {activeTab.content.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        );

      case "table":
        return (
          <div className="animate-in fade-in duration-500 overflow-hidden rounded-lg border border-gray-100">
            <table className="w-full text-left border-collapse">
              <tbody>
                {activeTab.content.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors"
                  >
                    <th className="py-4 px-6 bg-gray-50/80 font-semibold text-gray-700 w-1/3">
                      {row.label}
                    </th>
                    <td className="py-4 px-6 text-gray-600">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "reviews":
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            {activeTab.content.map((review) => (
              <div
                key={review.id}
                className="border-b border-gray-100 pb-8 last:border-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                  <div className="flex text-yellow-500">
                    <RatingStars rating={review.rating} />
                  </div>
                  <span className="font-bold text-gray-900">
                    {review.author}
                  </span>
                  <span className="text-gray-400 text-sm">{review.date}</span>
                </div>
                <p className="text-gray-600 italic leading-relaxed bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        );

      default:
        return <p className="text-gray-400">No content available.</p>;
    }
  };

  return (
    <div className="mt-16 w-full max-w-5xl mx-auto">
      {/* Navigation Headers */}
      <div className="flex flex-wrap items-center justify-start gap-4 md:gap-12 border-b border-gray-200 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActiveTabTitle(tab.title)}
            className={`pb-4 text-base md:text-lg font-semibold transition-all relative cursor-pointer outline-none ${
              activeTabTitle === tab.title
                ? "text-blue-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.title}
            {/* Active Indicator Bar */}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                activeTabTitle === tab.title ? "w-full" : "w-0"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="min-h-[250px] pb-10">{renderTabContent()}</div>
    </div>
  );
};

export default ProductDetailsTab;
