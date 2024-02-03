function validate (){
    if(!name || name.length < 3 ){
        setError("your name is invalid")
        return <FormError error={error} />
    }else if(!lastName || lastName.length < 3){
      setError("your lastname is invalid")
      return <FormError error={error} />
    }else if(!phone || phone.length < 11){
      setError("your phone is invalid")
      return <FormError error={error} />
    }else if(!email || !validEmail.test(email) ){
      setError("your email is invalid")
      return <FormError error={error} />
    }else if(!password || password.length < 6){
      setError("your password is invalid")
      return <FormError error={error} />
    }else if(!confirmPassword || confirmPassword !== password){
      setError("passeord and confirm doesnt equal")
      return <FormError error={error} />
    }
}