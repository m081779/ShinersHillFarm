const capitalize = (sentence: string) => {
	return sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

export default capitalize;