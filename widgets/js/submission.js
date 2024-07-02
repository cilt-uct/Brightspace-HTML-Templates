function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Dummy API endpoint
const APIEndpoint = 'https://ucttest.brightspace.com/d2l/api/le/1.67/{OrgUnitId}/dropbox/folders/{folderId}/submissions/';

// Fetch data from the dummy API
fetch(APIEndpoint)
  .then(response => response.json())
  .then(data => {
    // Update gauge values with random data from the API
    guages[0].end = getRandomValue(0, 100); // Assuming gauge 1 value range from 0 to 100
    guages[1].end = getRandomValue(0, 100); // Assuming gauge 2 value range from 0 to 100

    // Render gauges with updated data
    drawAll(percent);
  })
  .catch(error => console.error('Error fetching data:', error));



  