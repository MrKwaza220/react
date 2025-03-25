import { DangerButton } from "../composition/Composition";
import { BigSuccessButton } from "../composition/Composition";
import { RecursiveComponent } from "../recursivecomponent/RecursiveComponent"

const nestedOject = {
    a: 1,
    b: {
        b1: 4,
        b2: {
            b23: "hello",
        },
        b3: {
            b31: {
                message: 'Hi',
            },
            b32: {
                message: 'Hi',
            },
        }
    },
    c: {
        c1: 2,
        c2: 3
    }

}

export const HomeFunc = () => {
    return (
        <ul>
            <RecursiveComponent data={nestedOject} />

            <DangerButton text="Delete" />
            <BigSuccessButton text="Save" />
        </ul>
    )
}