const style = {
    속성: '값',
};
function Button({children ,onClick}){
    return <button onClick={onClick}>{children}</button>
}
export default Button;