import './Button.css';

function Button({children ,onClick, color}){
    const style = color === 'red' ? redButtonStyle : blueButtonStyle; 
    return <button style={style} onClick={onClick}>{children}</button>
}
export default Button;