
# 📁 Overview to https://nevadavets.org/

Building & developing nevadavets.org, a non-profit charitable foundation in order to help & improve quality of life for members of the military, retirees, veterans & their families undergoing medical treatment at military & veterans healthcare facilities.

## 🖥️ **Website Redevelopment**


This repository contains the source code for the redevelopment of [NevadaVets.org](https://nevadavets.org/), a non-profit website previously built using WordPress. The new tech stack is designed for simplicity, performance, and ease of content management for non-technical users.


## 🛠️ **Tech Stack Overview** 
[![My Skills](https://skillicons.dev/icons?i=js,html,css)](https://skillicons.dev)


### 📘 **Frontend**

-  **HTML - HTML5**

-  **SASS/SCSS - CSS3**

-  **JavaScript - ES6**

### 📖 **Backend**

-  **NodeJS - npm**

## ❓ **Why This Tech Stack?**
 
Simple, yet **powerful setup** that is just not overcomplicating things where things don't need to be. Using the basics _Plus+_ is enough for the project needs and development. This tech stack is the definition of _not_ reinventing the wheel. Spend **more** time coding and **less** time debugging. 

# 📁 Overview to Project Setup

```json
{
  "name": "nevadavets-org",
  "version": "1.0.0",
  "description": "Building & developing nevadavets.org, a non-profit charitable foundation in order to help & improve quality of life for members of the military, retirees, veterans & their families undergoing medical treatment at military & veterans healthcare facilities.",
  "main": "index.js",
  "scripts": {
    "start": "webpack serve --open",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@babel/preset-env": "^7.26.0",
    "babel-loader": "^9.2.1",
    "copy-webpack-plugin": "^12.0.2",
    "css-loader": "^7.1.2",
    "sass": "^1.82.0",
    "sass-loader": "^16.0.4",
    "style-loader": "^4.0.0",
    "webpack": "^5.97.1"
  },
  "devDependencies": {
    "html-webpack-plugin": "^5.6.3",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.1.0"
  }
}
```

### 🪛 **Installation**

- Node.js and npm installed.
- npm i webpack
- npm i sass
- npm i babel-loader
- npm i webpack-dev-server
- npm i webpack-cli
- npm i html-webpack-plugin
- npm i @babel/preset-env
- npm i style-loader
- npm i css-loader
- npm i sass-loader
- npm i copy-webpack-plugin
- npm i boxicons

1.  **Clone the Repository**

```bash
git clone https://github.com/your-username/nevadavets-org.git
cd nevadavets-org
```

## 🐛 **Issues/Bugs**

This is needed in order to process the images/assets when compiled using webpack. Output folder is **dist**.
```javascript
const CopyWebpackPlugin = require('copy-webpack-plugin');

new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }, // Copy the 'assets' folder to 'dist/assets'
      ],
    }),
```

## 🚧 **Updates/Progress**

Got assets working and configured _webpack.config.js_ file to include assets folder.
![image](https://github.com/user-attachments/assets/1e8e5a57-1e33-43b7-a4b4-194ef49028ff)

### **Navbar for Desktop Completed**
![Navbar_Completed](https://github.com/user-attachments/assets/8eb56926-a768-4140-b4fd-382f74845554)

### Updated Minor UI/UX Issues to Navbar
![Screenshot 2024-12-11 153535](https://github.com/user-attachments/assets/071fa8fc-3f8f-4251-8b4d-9b257f769b9c)
![Screenshot 2024-12-11 153608](https://github.com/user-attachments/assets/8e04f21f-c2fc-4ae6-944b-8b6235df068a)
![Screenshot 2024-12-11 153615](https://github.com/user-attachments/assets/b97f5582-f983-49cb-ab56-542ad3b57c25)

### **Hero Image for Desktop Completed**
![Screenshot 2024-12-11 130822](https://github.com/user-attachments/assets/d6298d00-95e8-47a0-8343-550bf71d55f3)

### **Feat: Header & Navbar, current website, now mobile friendly!**
<img src="https://github.com/user-attachments/assets/5c2bad92-6a8c-4787-b7bd-de6aa16dedbb" width="250">
<img src="https://github.com/user-attachments/assets/a092fd68-79d7-4695-8cb3-6e411d2ebc6e" width="250">
<img src="https://github.com/user-attachments/assets/f3533281-c6af-4a5e-a9fb-4c5ef902c243" width="250">

### **Added mobile menu hamburger icon to mobile version**
![Screenshot 2024-12-12 164443](https://github.com/user-attachments/assets/72e0d9d1-a186-46e2-84dd-e90f8e27d4d1)

