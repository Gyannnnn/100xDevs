
interface buttonProps{
  buttonName: string
  onClick?: () => void
}


export function Button({buttonName, onClick}:buttonProps){
  return <button onClick={onClick}>{buttonName}</button>
}