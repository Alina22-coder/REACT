import {simpsons} from "../../../data/data.ts";
import {CharacterComponent} from "../CharacterComponent/CharacterComponent.tsx";
import "../CharacterComponent/CharacterComponent.css";


export const FamilyComponent = () => {
    return (
        <div className="simpsons-character">
            {
                simpsons.map((value, index) => <CharacterComponent key={index} item={value}>
                    {value.info}
                </CharacterComponent>)
            }
        </div>
    );
};