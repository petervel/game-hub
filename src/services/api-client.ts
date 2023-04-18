import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api/",
	params: {
		key: "dffaa54c187f430080e15e2a4b0290be",
	},
});
