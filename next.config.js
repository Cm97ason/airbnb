/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: { 
    domains: [
      "links.papareact.com",
      "jsonkeeper.com"
  ],
  },
  env: {
    mapbox_key:'pk.eyJ1IjoiY29yZXlsbWFzb24iLCJhIjoiY2xlcWRva3M3MGw4MDN2bzFpNW42Y3I0NyJ9.cbyjHN5aY1QCT884jOojbA'
  }
};