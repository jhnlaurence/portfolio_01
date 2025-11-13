const Home = () => {

    const handleClick = () => {
        console.log('hello ninjas');
    }

    const handleClickAgain = (name) => {
        console.log('hello' + name);
    }

    return ( 
        <>
            <div className="home">
                <h1>Home Page</h1>
                <button onClick={handleClick}>Click me</button>
                <button onClick={() => {handleClickAgain('mario')}}>Click me again</button>
            </div>
        </>
     );
}
 
export default Home;