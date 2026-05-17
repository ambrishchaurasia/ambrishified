import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Landing from "./components/Landing"
import Experience from "./components/Experience"
import Divider from "./components/Divider"
import EditSection from "./components/EditSection"
import upes from "./assets/upes.png"
import avish from "./assets/avish.png"
import soae from "./assets/SOAE.png"
import YouTube from "./components/Youtube"
import brand1 from "./assets/4.png"
import brand2 from "./assets/5.png"
import brand3 from "./assets/6.png"
import brand4 from "./assets/7.png"
import zoodies from "./assets/zoodies.mp4"
import bytenotes from "./assets/byte-notes.mp4"
import socs from "./assets/socs.png"



const collegeEdits = [
  {
    title: "Runway UPES",
    desc: "Talking head edit for Runway UPES",
    link: "https://www.instagram.com/reel/DJGjIHgS5e1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnail: upes,
  },
  {
    title: "Socs UPES",
    desc: "Event highlight edit for School of Computer Science, UPES.",
    link: "https://www.instagram.com/reel/DGkydbFIaEx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnail: socs,
  },

  {
    title: "SOAE Industrial Visit",
    desc: "Documentary-style edit.",
    link: "https://www.instagram.com/reel/DIscsC4hc_K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnail: soae,
  },
  {
    title: "College Club Event",
    desc: "Edit for college club event",
    link: "https://www.instagram.com/reel/DHSs6eixSbk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnail: avish,
  },
]

const brandEdits = [
  {
    title: "Doon Gooseberry Farm",
    desc: "Edit for Doon Gooseberry Farm, a local organic farm in Dehradun.",
    link: "https://www.instagram.com/reel/DHSs6eixSbk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumbnail: brand1,
  },
  {
    title: "Zoodies",
    desc: "Edit for Zoodies, a trendy streetwear brand, showcasing their latest collection.",
    video: zoodies,
    thumbnail: brand2,
  },
  {
    title: "ByteNotes",
    desc: "SAAS product promo edit for ByteNotes, a note-taking app for developers.",
video: bytenotes,    thumbnail: brand3,
  },
  {
    title: "Gurukul Kishangarh Ghaseda",
    desc: "Edit for Gurukul Kishangarh Ghaseda, for their new admission campaign.",
    link: "https://youtu.be/O9mTzFt9LNE?si=oqkpJF6m944tgCu1",
    thumbnail: brand4,
  },
]

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <section id="home">
      <Landing />
      </section>

      <Divider />
            <section id="experience">

      <Experience />
      </section>

      <Divider /> 
       
            <section id="edits">

       <EditSection title="College" edits={collegeEdits} />
        </section>

<Divider />
 <EditSection title="Brands" edits={brandEdits} />
<YouTube/>





      <Footer />
    
    
    </div>
    
  )
}
// App.jsx
console.log('App render');
export default App