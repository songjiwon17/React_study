import './Button.css';

function Button({children ,onClick, color}){
    const classNames = `Button ${color}`;
    return <button clssName={classNames} onClick={onClick}>{children}</button>
}
export default Button;