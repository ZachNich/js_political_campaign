/* Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

Her congressional district (you can use yours here)
Her platform statements for the following issues.
    Taxes
    Jobs
    Infrastructure
    Health care
    Crime and enforcement
URL for donation form
Calendar of events
Volunteer information
    Name
    Address
    Email
    Phone number
    Availability
    What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
Biography
Image gallery
    Head shot
    Picture of family
    Picture of constituents
Mission statement
URL for registering to vote */

const elizabethCampaign = {
    district: 9,
    platform: {
        taxes: 'more taxes bad',
        jobs: 'more jobs good',
        infrastructure: 'infrastructure as strong as our buildings',
        healthcare: 'we should all be healthy',
        crime: 'crime should go away'
    },
    donationURL: 'giveyourmoneytopolitics.com',
    calendar: {
        january: 'keep warm',
        february: 'pay bills',
        march: 'protest',
        april: 'umbrellas for all',
        may: 'spring cleaning',
        june: 'open waterparks',
        july: 'lower taxes',
        august: 'hunting season open',
        september: 'wake me up when it ends',
        october: 'spook the other political parties',
        november: 'prepare for the winter',
        december: 'decrease work week hours'
    },
    volunteer: [
        {
            name: 'Fabio',
            address: '68 Fort Wood St',
            email: 'fabfabio@fabio.net',
            phone: '8889204321',
            availability: {
                days: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Sunday'],
                time: 'day'
            },
            activities: ['polling', 'phones', 'emails', 'texts']
        },
        {
            name: 'Sasuke',
            address: '420 Leaf Village Pk',
            email: '2cool4u@aol.com',
            phone: '4206661337',
            availability: {
                days: ['Tuesday', 'Wednesday', 'Thursday'],
                time: 'evening'
            },
            activities: ['emails', 'texts', 'fundraising']
        }
    ],
    biography: 'Elizabeth has always had the strength of two women. Having grown up with two first names combined into one, she has chosen to use this power for the good of all. From a young age, she demonstrated aptitude for maneuvering through conversations without providing real substance or answers--the perfect politician. Now that she\'s older and has access to her family\'s fortune that she most definitely doesn\'t deserve, she allegedly promises to use that money for the betterment of all mankind.',
    images: {
        headshot: '#',
        family:
            [
                husband: {
                    relation: 'husband',
                    name: 'Jack',
                    photo: '#'
                },
                daughter: {
                    relation: 'daughter',
                    name: 'Jill',
                    photo: '#'
                },
                son: {
                    relation: 'son',
                    name: 'John',
                    photo: '#'
                }
            ],
        constituents: [
            nameOne: {
                name: 'Ricky',
                photo: '#'
            },
            nameTwo: {
                name: 'Nicky',
                photo: '#'
            },
            nameThree: {
                name: 'Micky',
                photo: '#'
            }
        ]
        
    },
    mission: 'To promise a better life for all, to try quite hard in my first year, and then to give up and coast for the rest of my political years without making any significant changes.',
    registerURL: 'registertovoteforelizabeth.org'
}