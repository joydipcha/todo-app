const person = {
    name: 'Joydip',
    address: {
        street: '109 Bond ST',
        city: 'Bridgewater',
        state: 'NJ'
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfiles: () => {
        person.profiles.map(
            profile => console.log(profile)
        );
    }
}

export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.street}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfiles()}</div>
        </>
    );
}