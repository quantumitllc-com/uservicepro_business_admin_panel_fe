export const getFormatOfMessage = (str: string) => {
	const formatArr = str.split(".")
	return formatArr[formatArr.length - 1]
}
