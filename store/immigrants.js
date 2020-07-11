export const state = () => ({
    immigrants: [
        {
            "id": "sundarpichai",
            "displayName": "Sundar Pichai",
            "twitterHandle": "sundarpichai",
            "profilePicture": "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
            "designation": "CEO",
            "company": "Google",
            "firstEntry": "Nov 3rd 2020",
            "wikipedia": "https://en.wikipedia.org/wiki/Sundar_Pichai"
        },
        {
            "id": "satyanadella",
            "displayName": "Satya Nadella",
            "twitterHandle": "satyanadella",
            "profilePicture": "https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg",
            "designation": "CEO",
            "company": "Microsoft",
            "firstEntry": "Nov 3rd 2020",
            "wikipedia": "https://en.wikipedia.org/wiki/Satya_Nadella"
        },
        {
            "id": "vishalsikka",
            "displayName": "Vishal Sikka",
            "twitterHandle": "sundarpichai",
            "profilePicture": "https://pbs.twimg.com/profile_images/58989840/Photo_98_400x400.jpg",
            "designation": "CEO",
            "company": "Vianai",
            "firstEntry": "Nov 3rd 2020",
            "wikipedia": "https://en.wikipedia.org/wiki/Vishal_Sikka"
        },
        {
            "id": "nikesharora",
            "displayName": "Nikesh Arora",
            "twitterHandle": "nikesharora",
            "profilePicture": "https://pbs.twimg.com/profile_images/1126425669/twitter_400x400.jpg",
            "designation": "CEO",
            "company": "Palo Alto Networks",
            "firstEntry": "Nov 3rd 2020",
            "wikipedia": "https://en.wikipedia.org/wiki/Nikesh_Arora"
        },
        {
            "id": "elonmusk",
            "displayName": "Elon Musk",
            "twitterHandle": "elonmusk",
            "profilePicture": "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
            "designation": "CEO",
            "company": "SpaceX; Tesla; SolarCity; The Boring Company; Hyperloop; Starlink;",
            "firstEntry": "Nov 3rd 2020",
            "wikipedia": "https://en.wikipedia.org/wiki/Elon_Musk"
        },
        {
            "id": "alberteinstein",
            "displayName": "Albert Einstein",
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/440px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
            "designation": "Scientist",
            "firstEntry": "Nov 3rd 2020",
            "wikipedia": "https://en.wikipedia.org/wiki/Albert_Einstein"
        },
        {
            "id": "arnoldschwarzenegger",
            "displayName": "Arnold Schwarzenegger",
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/440px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg",
            "designation": "Actor",
            "firstEntry": "Nov 3rd 2020",
            "wikipedia": "https://en.wikipedia.org/wiki/Arnold_Schwarzenegger"
        },
        {
            "id": "stevechen",
            "displayName": "Steve Chen",
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/YouTube_TaiwanVersionLaunch_SteveChen-2.jpg/440px-YouTube_TaiwanVersionLaunch_SteveChen-2.jpg",
            "designation": "Founder",
            "firstEntry": "Nov 3rd 2020",
            "company": "You Tube",
            "wikipedia": "https://en.wikipedia.org/wiki/Steve_Chen"
        },
        {
            "id": "jawedkarim",
            "displayName": "Jawed Karim",
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Jawed_Karim_2008.jpg/440px-Jawed_Karim_2008.jpg",
            "designation": "Founder",
            "firstEntry": "Nov 3rd 2020",
            "company": "You Tube",
            "wikipedia": "https://en.wikipedia.org/wiki/Jawed_Karim"
        },
        {
            "id": "jankoum",
            "displayName": "Jan Koum",
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/4/48/Tumblr_inline_n19k9vpY8G1qzzumw_%28cropped%29.jpg",
            "designation": "Founder",
            "firstEntry": "Nov 3rd 2020",
            "company": "Whatsapp",
            "wikipedia": "https://en.wikipedia.org/wiki/Jan_Koum"
        },
        {
            "id": "lewisstrauss",
            "displayName": "Lewis Strauss",
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Levi_Strauss_1.jpg/440px-Levi_Strauss_1.jpg",
            "designation": "Founder",
            "firstEntry": "Nov 3rd 2020",
            "company": "Lewis Strauss",
            "wikipedia": "https://en.wikipedia.org/wiki/Levi_Strauss"
        },
        {
            "id": "sergeybrin",
            "displayName": "Sergey Brin",
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sergey_Brin_cropped.jpg/440px-Sergey_Brin_cropped.jpg",
            "designation": "Founder",
            "firstEntry": "Nov 3rd 2020",
            "company": "Google",
            "wikipedia": "https://en.wikipedia.org/wiki/Sergey_Brin"
        }
    ]
})

export const getters = {
    allImmigrants: state => state.immigrants,
    allTags: state => {
        const reducer = (accumulator, immigrant) => {
            const tag = immigrant.designation;
            if (accumulator.has(tag)) {
                accumulator.set(tag, accumulator.get(tag) + 1)
            } else {
                accumulator.set(tag, 1)
            }
            return accumulator;
        };
        const allTagsMap = state.immigrants.reduce(reducer, new Map())
        
        var allTags = [{
            name: "all",
            count: state.immigrants.length
        }]

        for (let [k, v] of allTagsMap) {
            console.log(k)
            allTags.push({
                name: k,
                count: v
            })
        }

        return allTags
    }
}