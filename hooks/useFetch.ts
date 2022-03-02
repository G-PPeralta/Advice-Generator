import { useState, useEffect } from "react";
import axios from "axios";


function useFetch(url: string) {
  const [advice, setAdvice] = useState({ advice: '', id: 0 });

  useEffect(() => {
    axios.get(url).then((response) => setAdvice(response.data.slip));
  }, []);

  return { advice };
}

export default useFetch;
