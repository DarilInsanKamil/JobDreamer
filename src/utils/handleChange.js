export const handleChange = (event, inputData, setInputData) => {
    let value = event.target.value;
    let name = event.target.name;
    setInputData({ ...inputData, [name]: value });
  };