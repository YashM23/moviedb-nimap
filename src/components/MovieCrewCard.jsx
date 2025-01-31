/* eslint-disable react/prop-types */
const MovieCrewCard = ({ crew }) => {
  
    return (
      <>
        <div className="text-neutral-300 flex overflow-x-scroll scrollbar-hidden py-2 md:py-5 md:px-4 mb-10 md:border border-neutral-900 mt-4 ">
          {crew?.length !== 0 ? (
            <>
              {crew?.map((c, i) => (
                <>
                  <div
                    key={i}
                    className="flex-none flex flex-col items-center justify-center h-full rounded-lg shadow-2xl"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${c?.profile_path}`}
                      alt=""
                      className=" rounded-3xl object-contain w-40 h-40 md:h-60 md:w-60 md:hover:scale-105 duration-300"
                    />
  
                    <p className="text-xl mt-4">{c.name}</p>
                  </div>
                </>
              ))}
            </>
          ) : (
            <>
              <p className="text-neutral-400">No data found</p>
            </>
          )}
        </div>
        {/* <h1 className=" text-4xl text-neutral-300">Details</h1> */}
      </>
    );
  };
  
  export default MovieCrewCard;
  