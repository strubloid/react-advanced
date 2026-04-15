
type ButtonProps = {
    size: 'small' | 'large';
    color: string;
    text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({size, color,text, ...props} : ButtonProps) => {
    return (
        <button 
          style={{
            fontSize: size === 'small' ? '20px' : '40px', 
            backgroundColor: color
          }}>
            {text}
        </button>
    )
}

export const RedButton = (props: Omit<React.ComponentProps<typeof Button>, 'color'>) => {
    return (
        <Button {...props} color={"crimson"} />
    )
}

export const GreenSmallButton = (props: Omit<React.ComponentProps<typeof Button>, 'color' | 'size'>) => {
    return (
        <Button {...props} color={"green"} size="small" />
    )
}