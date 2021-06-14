# [Marvel´s Hero Search](http://.google.com "Marvel's Hero Search")

![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png)

The following is a project made for the Leniolabs Bootcamp
It consists of a search engine for super heroes and comics from the marvel publishing house by using the official [Marvel Comis Api](http://https://developer.marvel.com/docs "Marvel Comis Api").

[TOCM]

---
### Tech Stack
- [React 17](http://https://reactjs.org "React 17")
- [React Router Dom](http://https://reactrouter.com/web/guides/quick-start "React Router Dom")
- [Styled Components](http://https://styled-components.com "Styled Components")
- [Vite](http://https://vitejs.dev "Vite")
- [Axios](http://https://www.npmjs.com/package/axios "Axios")

---
### Bugs
- I was still not able to correct this error in console: `:3000/undefined.undefined:1 GET http://localhost:3000/undefined.undefined 404 (Not Found)`
- Modals are not responsive yet
- Modals are not responsive yet
- For some reason, for the moment all modals return the data from the last comic called only.

---
### Implemented features
- When you enter the web app for the first time without any character in the URL, the site shows a random character (in the form of a hero) and so on every time you reload the page.
- The search contemplate looking for text similarities and name similarities, but only returns the first character result.
- The way in which the searches are shown is in the form of cards and modals for the detail of the character and the comics.
- Clicking on a card shows the detail of the character and shows a list of his comics.

### Features that need to be implemented
- Not implemented due to lack of time
 - Character searches by url
 - The search must have the possibility to search by comic directly.
 - The search should be able to be saved in a favorites list.
- The search should contemplate looking for text similarities and name similarities, but rendering a series of similar characters.

---
### Screenshots:
![](https://i.ibb.co/tBQdyZv/landing.png)
> Landing
<br />

![](https://i.ibb.co/RjcWLr0/main-grid.png)
> Main grid
<br />

![](https://i.ibb.co/LvWPQrt/character-detail.png)
> Character detail
<br />

![](https://i.ibb.co/y8G697y/comics-grid.png)
> Comics grid
<br />

![](https://i.ibb.co/NKQr6cn/modal.png)
> Modal
<br />

![](https://i.ibb.co/XY4225c/mobile-landing.png)
> Mobile landing
<br />

![](https://i.ibb.co/x3rGqVn/mobile-main-grid.png)
> Mobile main grid
<br />

![](https://i.ibb.co/Rcsxd8M/mobile-character-detail.png)
> Mobile character detail
<br />

![](https://i.ibb.co/tmfzRBk/mobile-comic-grid.png)
> Mobile comic grid
<br />

---
### Run Locally
1. Clone the project
`$ git clone https://github.com/AugustoCarmona/stan-ditko.git`

2. Go to the project directory
`$ cd stan-ditko/stan-ditko`

3. Install dependencies
`$ npm install`

4. Start the server
`$ npm run dev`

---
### Author

Augusto Carmona. [Contact Me!](http://augustocarmona.github.io "Contact Me!")
