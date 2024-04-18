const DealCard = ({ imageSrc, tourLink, tourTitle, tourDuration, tourDescription, showPricesAndButton, originalPrice, offerPrice, discount }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col">
        <div className="relative">
          <a href={tourLink}>
            <img className="w-full" src={imageSrc} alt={tourTitle} />
          </a>
          {showPricesAndButton && (
            <div className="text-xs absolute top-0 right-0 bg-green-600 px-4 py-2 text-white mt-3 mr-3">
              {discount}% Off
            </div>
          )}
        </div>
        <div className="px-6 py-4">
          <p className="text-sm text-amber-400 flex items-center">{tourDuration}</p>
          <a href={tourLink} className="font-medium text-lg block mb-2">{tourTitle}</a>
          <p className="text-gray-500 text-sm">{tourDescription}</p>
        </div>
        {showPricesAndButton && (
          <div className="px-6 pt-4 pb-6">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500"> From <s>${originalPrice}</s></span>
              <span className="text-2xl font-bold text-teal-500">${offerPrice}</span> 
            </div>
            <a href={tourLink} className="mt-4 block w-full rounded-md bg-teal-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get This Deal</a>
          </div>
        )}
      </div>
    );
  };
  
  export default DealCard;
  