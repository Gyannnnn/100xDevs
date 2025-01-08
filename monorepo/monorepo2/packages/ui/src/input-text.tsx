interface InputTextProps{
    placeholder: string,
    onChange:any

}




export  function InputText({placeholder,onChange}:InputTextProps){
    return <input 
    style={{
      width: '100%',
      height: '100%',
      border: 'none',
      outline: 'none',
      fontSize: '1.5rem',
      padding: '1rem',
      backgroundColor: "transparent"
    }}
    onChange={onChange}
    placeholder={placeholder}
    
    type="text" />
}