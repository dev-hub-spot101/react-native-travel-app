import TravelList from "./TravelList"

export default [
    {
        id:1,
        title:'Sights',
        travels :[...TravelList, ...TravelList]
    },
    {
        id:2,
        title:'Tours',
        travels :[...TravelList, ...TravelList, ...TravelList]
    },
    {
        id:3,
        title:'Advantures',
        travels :[...TravelList, ...TravelList, ...TravelList, ...TravelList]
    }
]