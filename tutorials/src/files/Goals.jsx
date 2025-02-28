import MissedGoal from "./Goal";
import MadeGoal from "./Goal";

export default function Goals(props) {
    const isGoal = props.isGoal;
    return (
        <>
        { isGoal ? <MadeGoal /> : <MissedGoal />}
        </>
    )
}