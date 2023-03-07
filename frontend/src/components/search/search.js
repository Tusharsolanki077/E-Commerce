import React ,{useState, Fragment} from 'react'
import './search.css'



const Search = ({history}) => {

    const [keyword, setKeyword] = useState("");

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if(keyword.trim()){
            history.push(`/products/${keyword}`);
        }else{
            history.push("/products");
        }
    };
    console.log('history:', history);


  return (
    <Fragment>
      <form className='search' onSubmit={searchSubmitHandler}>
        <input
         type="text"
         placeholder='Search product'
         onChange={(e) => setKeyword(e.target.value)}
         />
         <input type="submit" value="Search" />

        </form>
    </Fragment>
  );
};

export default Search;
