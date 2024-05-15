import { useState } from 'react'
import './App.css'
import reset_icon from './assets/new-bx-reset.svg'
// import morningSupplications from './duas'
import Duas from './Duas/'

function App() {
  const [count, setCount] = useState(0)
  const addCounter = () => {
    setCount(count+1)
  }
  const resetCounter = () => {
    setCount(0)
  }

  const fetchSupplications = () => {

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
And He is the Most High, the Most Great.<br></br><br></br><small className='times-to-read'>Read 3 times</small></p>
        
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
      <br></br>
      <br></br>

      <div className="supplication-cards">
      <p className='english-text'>In the name of Allah,
the Gracious, the Merciful
1. Say, “He is Allah, the One.
2. Allah, the Absolute.
3. He begets not, nor was He begotten.
4. And there is nothing comparable to Him.”<br></br><br></br><small className='times-to-read'>Read 3 times</small>
<br></br>
Whoever reads this in the morning and evening, it is sufficient for him for every matter.</p>
        
       <p className='arabic-text'>
       بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
<br></br>
قُلْ هُوَ ٱللَّهُ أَحَدٌ<br></br> ٱللَّهُ ٱلصَّمَدُ<br></br> لَمْ يَلِدْ وَلَمْ يُولَدْ<br></br> وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ
     
       </p>
       <div className='counter-div'>

       <button  onClick={addCounter} className='counter-btn'>{count}</button>
       <p>hi</p>
       
       <img src={reset_icon} onClick={resetCounter}/>
       
       </div>
      </div               >


      <br></br>
      <br></br>

      <div className="supplication-cards">
      <p className='english-text'>In the name of Allah,
the Gracious, the Merciful
1. Say, “He is Allah, the One.
2. Allah, the Absolute.
3. He begets not, nor was He begotten.
4. And there is nothing comparable to Him.”<br></br><br></br><small className='times-to-read'>Read 3 times</small>
</p>
        
       <p className='arabic-text'>
       بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
       <br></br>
قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ
<br></br> مِن شَرِّ مَا خَلَقَ<br></br> وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ<br></br> وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ<br></br> وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
     
       </p>
       <div className='counter-div'>

       <button  onClick={addCounter} className='counter-btn'>{count}</button>
       <p>hi</p>
       {/* <button className='reset-btn'><i class='bx bx-reset bx-flip-horizontal bx-tada' ></i></button> */}
       <img src={reset_icon} onClick={resetCounter}/>
       
       </div>
      </div               >

      <br></br>
      <br></br>

      <div className="supplication-cards">
      <p className='english-text'>In the name of Allah,
the Gracious, the Merciful
1. Say, “He is Allah, the One.
2. Allah, the Absolute.
3. He begets not, nor was He begotten.
4. And there is nothing comparable to Him.”<br></br><br></br><small className='times-to-read'>Read 3 times</small>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
Whoever reads this in the morning and evening, it is sufficient for him for every matter.
<br></br>
(Includes the three muwaa'idatain and ayatul kursi)</p>
        
       <p className='arabic-text'>
       بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
       <br></br>
قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ
<br></br> مَلِكِ ٱلنَّاسِ ،
 إِلَٰهِ ٱلنَّاسِ
<br></br> مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ
<br></br> ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ
<br></br> مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ 
<br></br><br></br>
<small className='times-to-read'>
من قالها حين يصبح وحين يمسى كفته من كل شىء 
</small>  
       </p>
       <div className='counter-div'>

       <button  onClick={addCounter} className='counter-btn'>{count}</button>
       <p>hi</p>
       
       <img src={reset_icon} onClick={resetCounter}/>
       
       </div>
      </div               >
      <section>
        <div>
          <Duas />
        </div>
      </section>
      
    </div>
    </>
  )
}

export default App
