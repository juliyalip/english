import React from 'react';
import Section from '../../component/main/Section/Section';
import KursSection from '../../component/main/kurs/KursSection/KursSection';
import items from '../../component/main/data/kurs'


export default function Home() {
    
    return (
        <main>
            <Section title="Занимайся на курсах">
            <KursSection  items={items} />
            </Section>
            <Section title="Тренируй навыки самостоятельно"></Section>
        </main>
    )
}