import './Button.css';

function Button({children ,onClick, color = 'blue', className=''}){
    const classNames = `Button ${color}`; //클래스명을 추가할 때 빈 공백이 필요하다. 
    return <button className={classNames} onClick={onClick}>{children}</button>
}
export default Button;