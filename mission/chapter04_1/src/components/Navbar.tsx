import { NavLink } from "react-router-dom"

const LINKS = [
    { to : '/', label : '홈'},
    { to : '/movies/popular', label : '인기 영화'},
    { to : '/movies/now_playing', label : '상영 중'},
    { to : '/movies/top_rated', label : '평점 높은'},
    { to : '/movies/upcoming', label : '개봉 예정'},
];

export const Navbar = () => {
    return <>
        <div className = "flex gap-3 p-4 bg-pink-200 justify-center"> 
            {LINKS.map(({to, label}) => (
                <NavLink
                key = {to} 
                to = {to} 
                className = {({isActive}) => {
                    return isActive ? 'text-pink-500 font-bold' : 'text-white'}}
                >
                    {label}
                </NavLink>
            ))}
        </div>
    </>
}