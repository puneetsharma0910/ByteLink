# ByteLink - URL Shortener 🔗  

ByteLink is a simple URL shortener built with **Next.js 15** and **MongoDB**. It allows users to generate short URLs and redirect them to the original links.  

## 🚀 Features  
- Shorten long URLs 📏  
- Custom short URL option ✨  
- Instant redirection 🔄  
- Simple and responsive UI 🎨  

## 🛠️ Tech Stack  
- **Frontend:** Next.js 15, Tailwind CSS  
- **Backend:** Next.js API Routes, MongoDB  
- **Database:** MongoDB 

## 📦 Installation & Setup  
```bash
git clone https://github.com/puneetsharma0910/ByteLink.git  
cd ByteLink  
npm install  

# Create a .env.local file and add the following:  
echo "NEXT_PUBLIC_HOST=http://localhost:3000" >> .env.local  
echo "MONGODB_URI=mongodb+srv://your-mongodb-uri" >> .env.local  

npm run dev  

# Open the app in your browser  
# http://localhost:3000

