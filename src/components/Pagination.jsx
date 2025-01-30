/* eslint-disable react/prop-types */
const Pagination = ({ page, setPage }) => {


  const prevPage = () =>{
    if(page > 1){
      setPage(page => page - 1)
    }
  }

  const nextPage = () =>{
    setPage(page => page + 1)
  }

  return (
    <div className="flex justify-center items-center gap-4 mt-10 text-xl">
      <button onClick={()=>{prevPage()}} className="text-white hover:bg-white hover:text-black duration-300 border border-neutral-600 px-2">-</button>

      <p className="text-white">{page}</p>

      <button onClick={()=>{nextPage()}} className="text-white hover:bg-white hover:text-black duration-300 border border-neutral-600 px-2">+</button>
    </div>
  );
};

export default Pagination;
