import React from 'react';
import { useSelector } from 'react-redux';
import {getVerbsSelector, getAdverbsSelector} from '../../redux/selector'
import Section from '../../component/main/Section/Section';
import KursSection from '../../component/main/kurs/KursSection/KursSection';
import items from '../../component/main/data/kurs';


import SectionSelfDeveloper from '../../component/main/selfDevelopment/SectionSelfDeveloper/SectionSelfDeveloper';


export default function Home() {

    const stateVerbs = useSelector(getVerbsSelector);
const adverbs = useSelector(getAdverbsSelector)
    
    return (
        <main>
            <Section title="Занимайся на курсах">
            <KursSection  items={items} />
            </Section>
            <Section title="Тренируй навыки самостоятельно">
              
                <SectionSelfDeveloper title="Глаголы состояния" items={ stateVerbs}/>
                <SectionSelfDeveloper title="Наречия, отвечают на вопрос - как ?" items={ adverbs}/>
            </Section>
        </main>
    )
}