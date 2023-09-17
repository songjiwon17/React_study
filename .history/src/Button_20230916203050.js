const baseButtonStyle = {
    padding: '14px 27px',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: '30px',
    fontSize: '17px',
};
function Button({children ,onClick}){
    return <button style={baseButtonStyle} onClick={onClick}>{children}</button>
}
export default Button;