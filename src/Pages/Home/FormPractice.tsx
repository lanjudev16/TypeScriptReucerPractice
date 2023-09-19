const FormPractice = () => {
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const name=(e.currentTarget.elements.namedItem('name') as HTMLInputElement).value;
        console.log(name)
    }
    return (
        <div>
            <form onSubmit={(e)=>{handleSubmit(e)}} >
                <input type="text" name="email" />
                <input type="text" name="name" />
                <input type="submit"   value="Submit" />
            </form>
        </div>
    );
};

export default FormPractice;