import dataAbout from '../../../data/about.json'
import Collapse from '../../component/Collapse'

function Main() {
    return (
        <main className='main--about'>
            <div className="banner banner__about">
                <div className="banner--filter-black"></div>
                <div className="banner--img banner--img__about"></div>
            </div>

            <div className='collapses-about'>
                {dataAbout.map((about, index) => (
                    <Collapse key={`${about.title}-${index}`} title={about.title} description={about.description} index={index}/>
                ))}

            </div>
        </main>
    )
}

export default Main