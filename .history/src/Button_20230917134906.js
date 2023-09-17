import './Button.css';

function Button({children ,onClick, color = 'blue', className=''}){ //props의 초기값을 설정해준다.
    const classNames = `Button ${color} ${className}`; //클래스명을 추가할 때 빈 공백이 필요하다. 
    return <button className={classNames} onClick={onClick}>{children}</button>
}
export default Button;