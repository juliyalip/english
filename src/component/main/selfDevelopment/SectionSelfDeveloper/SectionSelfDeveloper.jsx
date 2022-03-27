import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVerbsSelector } from '../../../../redux/selector';
import {complitedVerbSuccess } from '../../../../redux/action';
import ItemSelfDevelopment from '../ItemSeifDevelopment/ItemSelfDevelopment';
import s from './sectionSelfDeveloper.module.css'


export default function SectionSelfDeveloper({ title , items}) {
    
    const dispatch = useDispatch()

    
    const [activeIndex, setActiveIndex] = useState(0);

    const onComplited = id => {
        console.log('onChange')
        dispatch(complitedVerbSuccess (id))
    }
    
    const onClickNext = () => {
        setActiveIndex(prevState => prevState + 1)
    }

    const onClickLast= () => {
        setActiveIndex(prevState => prevState - 1)
    }

    const { text, complited, id, translate } = items[activeIndex];
    const lastIndex = activeIndex === items.length - 1;
    const firstIndex = activeIndex === 0

    
    return (
      
        <div className={s.container}>
            <p>{title}</p>

            <ItemSelfDevelopment complited={complited} onComplited={() => onComplited (id)}
                text={text}  translate={translate} onLastIndex={lastIndex} onFirstIndex={firstIndex}
         onClickLastBtn={onClickLast} onClickNextBtn={onClickNext}   />
        </div>

      
        
       
    )
}


//    export default function SectionSelfDeveloper({ title }) {
//      const items = useSelector(getVerbsSelector);
//      const dispatch = useDispatch()
//  
//      
//      const [activeIndex, setActiveIndex] = useState(0);
//  
//      const onComplited = id => {
//          console.log('onChange')
//          dispatch(complitedVerbSuccess (id))
//      }
//      
//      const onClickNext = () => {
//          setActiveIndex(prevState => prevState + 1)
//      }
//  
//      const onClickLast= () => {
//          setActiveIndex(prevState => prevState - 1)
//      }
//  
//      const { text, complited, id, translate } = items[activeIndex];
//      const lastIndex = activeIndex === items.length - 1;
//      const firstIndex = activeIndex === 0
    
//      return (
//        
//          <div className={s.container}>
//              <p>{title}</p>
//  
//              <ItemSelfDevelopment complited={complited} onComplited={() => onComplited (id)}
//                  text={text}  translate={translate} onLastIndex={lastIndex} onFirstIndex={firstIndex}
//           onClickLastBtn={onClickLast} onClickNextBtn={onClickNext}   />
//          </div>        
//      )
//  }
  





