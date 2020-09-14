const getMoviesFromApiAsync = async () => {
    try {
        let response = await fetch("https://api.github.com/repos/request/request");
        let json = await response.json();
        return json.stargazers_count;
    } catch (error) {
        console.error(error);
    }
};
console.log(getMoviesFromApiAsync());