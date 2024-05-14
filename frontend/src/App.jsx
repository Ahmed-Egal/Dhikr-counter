import { useState } from 'react'
import './App.css'
import reset_icon from './assets/new-bx-reset.svg'

function App() {
  const [count, setCount] = useState(0)
  const addCounter = () => {
    setCount(count+1)
  }
  const resetCounter = () => {
    setCount(0)
  }

  return (
    <>
    <div className='section'>
      <h2 className='heading'>Welcome to dhikr counter, a small application to help you keep up with your daily supplications.</h2>
      <div className="supplication-cards">
      <p className='english-text'>Allah! There is none worthy of worship but He, the Ever-Living, the One Who sustains and protects all that exists.
Neither slumber nor sleep overtakes Him.
To Him belongs whatever is in the heavens and whatever is on the earth.
Who is he that can intercede with Him except with His Permission?
He knows what happens to them in this world, and what will happen to them in the Hereafter.
And they will never encompass anything of His Knowledge except that which He wills.
His Throne extends over the heavens and the earth,
and He feels no fatigue in guarding and preserving them.
And He is the Most High, the Most Great.</p>
        
       <p className='arabic-text'>
        اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. 
        
       </p>
       <div className='counter-div'>

       <button  onClick={addCounter} className='counter-btn'>{count}</button>
       <p>hi</p>
       {/* <button className='reset-btn'><i class='bx bx-reset bx-flip-horizontal bx-tada' ></i></button> */}
       <img src={reset_icon} onClick={resetCounter}/>
       
       </div>
      </div>
    </div>
    </>
  )
}

export default App
