async function getCountryName(code) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
  let pageNumber = 1;
  let selectedCountry = null;

  while (!selectedCountry) {
    const apiResult = await axios.get(
      `https://jsonmock.hackerrank.com/api/countries?page=${pageNumber}`
    );
    const countryList = apiResult.data.data;

    countryList.forEach((country) => {
      if (country.alpha2Code === code) selectedCountry = country;
    });

    pageNumber++;
    if (apiResult.data.total_pages < pageNumber) {
      console.log("Country Not Found.");
      break;
    }
  }

  return (selectedCountry && selectedCountry.name) || null;
}
