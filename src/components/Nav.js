import React, { useState ,useEffect} from 'react'
import "./Nav.css"
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      window.addEventListener("scroll",() => {
        console.log('window.scrollY',window.scrollY);
        if(window.scrollY > 50){
            setShow(true);
        }else {
            setShow(false);
        }
      });
    
      return () => {
        window.removeEventListener("scroll",() => {});
      };
    }, []);

    const handleChange = (e) => {
      setSearchValue(e.target.value);
      navigate(`/search?q=${e.target.value}`);
    }
    
    return (
    <nav className={`nav ${show && "nav__black"} `}>
        <img
            alt='Netflix logo'
            src="https://i.namu.wiki/i/bOQHXoyrte0XH9RfoDXSsdbFLCvIj-RzLs_YU13uHPhosKBvq1YwR1_OE-wjQCN-YQw_SiYXkDWFz0a19lEiSAxOfqCk8Meh6Z5dCNfvKDob07cPThTH4CcXloOR5JwBio0FxhUSdKKAVgn7q9BR6g.svg"
            className='nav__logo'
            onClick={() => window.location.reload()}
        />
        <input value={searchValue}  onChange={handleChange} className='nav__input' type='text' placeholder="영화를 검색해 주세요"/>
        <img
            alt="User logged"
            src='https://i.namu.wiki/i/tHnrTGLe48ZFclVkGRgy3gWVfxXzeE7zD57FbiAAFMOakX231F8q4Ob_2X58fUCxNFsMzoseBC-ze5xFKuQJSkCK08OTZfPtUDr8N9RDxpYygz5w_MTX4rPj6DhRPvCc6flhZR4qJnLKbzXGDydWXQ.svg'
            className='nav__avatar'
        />
    </nav>
    );
}
