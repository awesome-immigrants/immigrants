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
        
        var allTags = []
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