import React from 'react';

const teamMembers = [
    {
        name: 'Chef Davesh Kumar',
        position: 'Head Chef',
        description:
            'With over years of culinary experience, Chef Davesh Kumar is the visionary behind Opulenza Verve\'s diverse menu. His dedication to perfection and innovation shines through in every dish he creates.',
        imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
    },
    {
        name: 'Swara Sharma',
        position: 'Restaurant Manager',
        description:
            'Swara Sharma is the heart of our dining experience, ensuring seamless service and a warm ambiance. Her passion for hospitality ensures that every visit is a memorable one.',
        imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
    },
    {
        name: 'Sachin Singh',
        position: 'Head of Kitchen Operations',
        description:
            'Sachin Singh brings the magic of Indian cuisine to life in our kitchen. His expertise in blending spices and flavors is the secret behind our delectable dishes.',
        imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
    },
    {
        name: 'Ariana Sharon',
        position: 'Italian Cuisine Specialist',
        description:
            'Hailing from Italy, Ariana Sharon is our Italian cuisine maestro. She adds the Mediterranean touch to our menu, creating dishes that transport you to the heart of Italy.',
        imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',

    },
    {
        name: 'Anurag Kumar',
        position: 'South Indian Culinary Expert',
        imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
        description: 'Anurag Kumar is our South Indian culinary guru. His mastery of traditional South Indian flavors adds a unique dimension to our offerings.',
    },
];


const OurTeam = () => {
    return (
        <div>
            <section class="bg-white dark:bg-gray-900 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="h2 capitalize text-black py-2 ">Our Team</h2>
                </div>
                <div className="container flex justify-center mx-auto mb-3">
                    <div>
                        <h1>The Talented People Behind the Scenes of the Restaurant</h1>
                    </div>
                </div>
                <div className="container mx-auto py-8 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                                <div className="flex items-center">
                                    <div className="w-1/3">
                                        <img
                                            src={member.imageSrc}
                                            alt={member.name}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="w-2/3 pl-4">
                                        <h2 className="text-xl font-semibold">{member.name}</h2>
                                        <p className="text-gray-600 text-sm">{member.position}</p>
                                        <p className="mt-2">{member.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default OurTeam;