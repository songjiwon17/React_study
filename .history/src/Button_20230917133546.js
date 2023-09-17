import './Button.css';

function Button({children ,onClick, color}){
    const classNames = `Button ${color}`;
    return <button style={style} onClick={onClick}>{children}</button>
}
export default Button;