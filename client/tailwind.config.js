/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {},
      backgroundImage: {
         'bg-img-1': "url('src/assets/img-1.png')",
         'bg-img-2': "url('src/assets/img-2.png')",
       },
   },
   plugins: [],
};
