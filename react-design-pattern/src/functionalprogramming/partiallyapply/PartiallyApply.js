export const PartiallyApply = (Component, partiallyProps) => {
    return props => {
        return <Component {...partiallyProps} {...props} />
    }
}

export const Button = ({ size, color, text, ...props}) => {
    return (
        <button style={{
            padding: size === 'large' ? '32px' : '8px',
            fontSize: size === 'large' ? '24px' : '16px',
            backgroundColor: color,
        }} {...props}>
            {text}
        </button>
    )
}

export const DangerButton = PartiallyApply(Button, {color: 'red'});
export const BigSuccessButton = PartiallyApply(Button, {size: 'large', color: 'green'});