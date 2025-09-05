import type {SimpsonsType} from "../../../data/data.ts";
import type {ReactNode} from "react";



interface CharacterComponentProps {
    item: SimpsonsType;
    children: ReactNode;
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className="simpsons">
            <h2>{item.name} {item.surname} - {item.age}</h2>
            <div className='wrapper'>
                <p>{children}</p>
                <img src={item.photo} alt={item.name}/>
            </div>
        </div>
    );
};