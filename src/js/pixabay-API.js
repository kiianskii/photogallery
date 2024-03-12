import axios from 'axios';


export async function getImages(userValue, page) {
  const url = 'https://pixabay.com/api/';
  const params = {
      key: "42734676-8c749a784e7b90411d6581e4f",
      q: userValue,
      image_type: "photo",
      orientation: "horizontal",
    safesearch: true,
    page,
    per_page: 15,
  };
 return await axios.get(url, { params })
}

