import './Grid.scss';
import UserCard from '../UserCard/UserCard';
import team from "../../data/team";


const Grid = () => {
    return (
        <section className="grid">
            {team.map((member) =>
                <UserCard key={member.id.toString()} name={member.name} role={member.role}/>)
            }
        </section>
    )
}


export default Grid;