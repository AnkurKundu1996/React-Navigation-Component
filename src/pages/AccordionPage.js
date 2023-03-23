import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 1,
            label: 'React',
            content: 'Use React for any project'
        },
        {
            id: 2,
            label: 'Vue',
            content: 'Use Vue for any project'
        },
        {
            id: 3,
            label: 'Angular',
            content: 'Use Angular for any project'
        }
    ];

    return (
        <div>
            <Accordion items={items} />
        </div>

    );
}

export default AccordionPage;