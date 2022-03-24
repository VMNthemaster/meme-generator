import React, {useState, useEffect} from 'react'

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "",
        isTextColorBlack: false
    })

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
          .then((res) => res.json())
              .then((data) => setAllMemes(data.data.memes))
      }, [])
      
      console.log(allMemes)

    const getMemeImage = () => {
        const memesArray = allMemes;
        console.log(memesArray)
        const randomNumber = Math.floor(Math.random() * (memesArray.length))
        const url = memesArray[randomNumber].url
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target
        setMeme((prevText) => {
            return {
                ...prevText,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    


    return (
        <>
            <main className='pt-8'>
                <div>
                    <div className="px-4 " >
                        <input type="text" 
                               className="w-[45%] rounded-md mr-[5%] h-10 px-2  border-2 border-gray-400 " 
                               placeholder='Top Text'
                               name='topText'
                               value = {meme.topText}
                               onChange = {handleChange}
                               />
                 
                        <input type="text" 
                               className="w-[45%] rounded-md ml-[5%] h-10 px-2  border-2 border-gray-400 " 
                               placeholder='Bottom Text'
                               name='bottomText'
                               value = {meme.bottomText}
                               onChange = {handleChange}
                                />
                        
                    </div>
                    <div className="px-4 mt-6 space-x-3">
                        <button type="button" onClick={getMemeImage} className="flex mb-4 h-10 rounded-md text-white text-2xl font-[gabriola] w-full justify-center items-center bg-gradient-to-r from-purple-700 to-purple-400">Get Meme Image</button>
                        <div className='flex gap-x-2 items-center'>
                        <input type="checkbox"
                               id = "text-color"
                               name = "isTextColorBlack"
                               checked = {meme.isTextColorBlack}
                               onChange = {handleChange}
                               className = "w-5 h-5 rounded-sm"
                        />
                        <label htmlFor='text-color' className=' text-xl'>Check this to apply black text colour.</label>
                        </div>
                    </div>

                </div>

                <div className='px-4 pt-8 '>
                    <div className='relative grid'>
                        
                     {meme.randomImage !== "" && <img className=' w-full h-screen rounded-lg border-2 border-black' src = {meme.randomImage} alt = "memeImage" /> }
                        
                     {meme.randomImage !== "" && <h2 className={`absolute top-2 text-${meme.isTextColorBlack ? "black" : "white"} justify-self-center text-[3.5rem] font-extrabold font-sans px-3 justify-center items-center text-center overflow-auto`}>{meme.topText}</h2>}
                     {meme.randomImage !== "" && <h2 className={`absolute bottom-2 text-${meme.isTextColorBlack ? "black" : "white"} justify-self-center text-[3.5rem] font-extrabold font-sans px-3 justify-center items-center text-center overflow-auto`}>{meme.bottomText}</h2>}
                        
                    </div>

                </div>
            </main>
        </>
    )
}

export default Meme