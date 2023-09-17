const style = {
    background-color: 'pink',
};
function Button({children ,onClick}){
    return <button style={style} onClick={onClick}>{children}</button>
}
export default Button;