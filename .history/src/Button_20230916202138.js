const style = {
    backgroundColor: 'pink',
};
function Button({children ,onClick}){
    return <button style={style} onClick={onClick}>{children}</button>
}
export default Button;