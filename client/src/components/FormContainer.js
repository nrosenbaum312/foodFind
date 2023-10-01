export default function FormContainer(props) {
    return (
        <div className='form-centering-container'>
            <div className='form-container panel'>
                {props.children}
            </div>
            <div className='margin-top-5'>
                {props.after}
            </div>
        </div>
    )
}